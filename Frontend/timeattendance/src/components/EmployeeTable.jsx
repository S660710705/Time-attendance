import React, { useEffect, useState } from 'react';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/employees")
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error("Error fetching employees:", err));
  }, []);

  const handleExport = () => {
    window.open("http://localhost:8080/export", "_blank");
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">

      
      <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md w-full max-w-5xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-400">
          Employees Attendance
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-400">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="py-2 px-4 border border-gray-300">ID</th>
                <th className="py-2 px-4 border border-gray-300">Firstname</th>
                <th className="py-2 px-4 border border-gray-300">Lastname</th>
                <th className="py-2 px-4 border border-gray-300">Job Title</th>
                <th className="py-2 px-4 border border-gray-300">Work Date</th>
                <th className="py-2 px-4 border border-gray-300">Check In</th>
                <th className="py-2 px-4 border border-gray-300">Check Out</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id} className="text-center">
                  <td className="py-2 px-4 border border-gray-300 text-black">{emp.id}</td>
                  <td className="py-2 px-4 border border-gray-300 text-black">{emp.firstname}</td>
                  <td className="py-2 px-4 border border-gray-300 text-black">{emp.lastname}</td>
                  <td className="py-2 px-4 border border-gray-300 text-black">{emp.job_title}</td>
                  <td className="py-2 px-4 border border-gray-300 text-black">
                    {new Date(emp.work_date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {emp.check_in?.Time || "-"}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {emp.check_out?.Time || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={handleExport}
          type="button"
          className="mt-6 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
          shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Print Report
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
