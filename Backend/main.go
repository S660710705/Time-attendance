package main

import (
    "database/sql"
    "fmt"
    "log"
    "net/http"
    "time"
    "encoding/json"
    _ "github.com/lib/pq"
    "github.com/xuri/excelize/v2"
)

var db *sql.DB

type Employee struct {
    ID        int          `json:"id"`
    Firstname string       `json:"firstname"`
    Lastname  string       `json:"lastname"`
    Job_title string       `json:"job_title"`
    Work_date time.Time    `json:"work_date"`
    Check_in  sql.NullTime `json:"check_in"`
    Check_out sql.NullTime `json:"check_out"`
}

func enableCORS(w http.ResponseWriter) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}


func GetEmployees(w http.ResponseWriter, r *http.Request) {
    enableCORS(w)
    rows, err := db.Query("SELECT id, firstname, lastname, job_title, work_date, check_in, check_out FROM employees")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer rows.Close()

    var employees []Employee
    for rows.Next() {
        var e Employee
        if err := rows.Scan(&e.ID, &e.Firstname, &e.Lastname, &e.Job_title, &e.Work_date, &e.Check_in, &e.Check_out); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        employees = append(employees, e)
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(employees)
}


func ExportAttendanceExcel(w http.ResponseWriter, r *http.Request) {
    enableCORS(w)
    f := excelize.NewFile()
	sheet := "Attendance"
	f.NewSheet(sheet)

	idx, err := f.GetSheetIndex(sheet)

f.SetActiveSheet(idx)

    
    headers := []string{"ID", "Firstname", "Lastname", "Job Title", "Work Date", "Check In", "Check Out"}
    for i, h := range headers {
        col := string(rune('A' + i))
        f.SetCellValue(sheet, fmt.Sprintf("%s1", col), h)
    }

    
    rows, err := db.Query("SELECT id, firstname, lastname, job_title, work_date, check_in, check_out FROM employees")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer rows.Close()

    rowIndex := 2
    for rows.Next() {
        var e Employee
        if err := rows.Scan(&e.ID, &e.Firstname, &e.Lastname, &e.Job_title, &e.Work_date, &e.Check_in, &e.Check_out); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }

        f.SetCellValue(sheet, fmt.Sprintf("A%d", rowIndex), e.ID)
        f.SetCellValue(sheet, fmt.Sprintf("B%d", rowIndex), e.Firstname)
        f.SetCellValue(sheet, fmt.Sprintf("C%d", rowIndex), e.Lastname)
        f.SetCellValue(sheet, fmt.Sprintf("D%d", rowIndex), e.Job_title)
        f.SetCellValue(sheet, fmt.Sprintf("E%d", rowIndex), e.Work_date.Format("2006-01-02"))

        if e.Check_in.Valid {
            f.SetCellValue(sheet, fmt.Sprintf("F%d", rowIndex), e.Check_in.Time.Format("15:04"))
        } else {
            f.SetCellValue(sheet, fmt.Sprintf("F%d", rowIndex), "")
        }

        if e.Check_out.Valid {
            f.SetCellValue(sheet, fmt.Sprintf("G%d", rowIndex), e.Check_out.Time.Format("15:04"))
        } else {
            f.SetCellValue(sheet, fmt.Sprintf("G%d", rowIndex), "")
        }

        rowIndex++
    }

    
    w.Header().Set("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    w.Header().Set("Content-Disposition", "attachment; filename=attendance.xlsx")

    if err := f.Write(w); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
}

func main() {
    var err error
    db, err = sql.Open("postgres", "postgres://Hr_user:123456@localhost:5432/EmployeeDB?sslmode=disable")
    if err != nil {
        log.Fatal(err)
    }
    if err = db.Ping(); err != nil {
        log.Fatal("Cannot connect to DB:", err)
    }

    http.HandleFunc("/export", ExportAttendanceExcel)
    http.HandleFunc("/employees", GetEmployees)

    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
}
