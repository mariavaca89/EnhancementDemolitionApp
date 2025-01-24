import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li><Link to="/employees">Manage Employees</Link></li>
        <li><Link to="/jobs">Manage Jobs</Link></li>
        <li><Link to="/safety-reports">View Safety Reports</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
