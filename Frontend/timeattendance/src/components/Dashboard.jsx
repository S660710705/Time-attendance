import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-5xl font-bold text-blue-400 mb-6">
        Dashboard Overview
      </h1>
      <p className="text-gray-600 text-lg">
        Welcome to the dashboard! Here you can manage your reports and employees.
      </p>
    </div>
  );
};

export default Dashboard;
