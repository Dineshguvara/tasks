import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ title, buttonName, routeURL }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2"
      >
        <span>{title}</span>
      </button>
      <Link
        to={routeURL}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        {buttonName}
      </Link>
    </div>
  );
};

export default Header;
