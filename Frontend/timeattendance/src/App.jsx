import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeTable from './components/EmployeeTable';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'; 

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />

        <main className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} /> 
            <Route path="/report" element={<EmployeeTable />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
