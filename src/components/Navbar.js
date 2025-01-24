import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">EDA App</Link>
      </div>
      <ul className="nav-links">
        {auth.token ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/employees">Employees</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/safety-reports">Safety Reports</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
