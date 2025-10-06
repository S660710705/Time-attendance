import React from "react";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 flex flex-col justify-between py-6 shadow-lg z-50">
      <div className="flex flex-col items-start px-6">
        <div className="flex items-center mb-6">
          <DocumentIcon className="h-8 w-8 text-white mr-3" />
          <span className="text-white text-lg font-semibold">Time Attendance</span>
        </div>

        <div className="flex flex-col space-y-3 mt-2">
          <Link
            to="/"
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Dashboard
          </Link>

          <Link
            to="/report"
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Report
          </Link>
        </div>
      </div>

      <div className="px-6">
        <button className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors w-full flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
