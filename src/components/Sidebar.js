import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white w-64 flex flex-col shadow-lg">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        <h1 className="text-blue-400">Dashboard</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-lg font-medium transition-colors duration-300 rounded-md hover:bg-gray-700 hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className="flex items-center p-2 text-lg font-medium transition-colors duration-300 rounded-md hover:bg-gray-700 hover:text-blue-400"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center p-2 text-lg font-medium transition-colors duration-300 rounded-md hover:bg-gray-700 hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">© 2024 Your Company</p>
      </div>
    </div>
  );
};

export default Sidebar;
