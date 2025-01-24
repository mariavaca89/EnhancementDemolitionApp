import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeePage from "./components/Employees/EmployeePage";
import JobPage from "./components/Jobs/JobPage";
import SafetyReports from "./components/SafetyReports/SafetyReports";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <EmployeePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <JobPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/safety-reports"
            element={
              <ProtectedRoute>
                <SafetyReports />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
