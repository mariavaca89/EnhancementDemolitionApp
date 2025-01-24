import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// Auth
export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

// Employees
export const getAllEmployees = () => API.get("/employees");
export const createEmployee = (data) => API.post("/employees/add", data);
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);

// Jobs
export const getAllJobs = () => API.get("/jobs");
export const createJob = (data) => API.post("/jobs/add", data);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);

// Safety Reports
export const getAllSafetyReports = () => API.get("/safety-reports");
export const createSafetyReport = (data) => API.post("/safety-reports/add", data);
export const deleteSafetyReport = (id) => API.delete(`/safety-reports/${id}`);
