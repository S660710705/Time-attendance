
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    job_title VARCHAR(50),
    work_date DATE DEFAULT CURRENT_DATE,
    check_in TIMESTAMP,
    check_out TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- สร้าง function สำหรับ trigger
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- สร้าง trigger
DROP TRIGGER IF EXISTS update_emp_modtime ON employees;

CREATE TRIGGER update_emp_modtime
BEFORE UPDATE ON employees
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- เพิ่มข้อมูลตัวอย่าง
INSERT INTO employees (firstname, lastname, job_title) VALUES
    ('firstname1', 'lastname1', 'it support'),
    ('firstname2', 'lastname2', 'developer'),
    ('firstname3', 'lastname3', 'engineer');
