import React, { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../../api/api";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const { data } = await getAllEmployees();
        setEmployees(data);
      } catch (err) {
        console.error("Failed to fetch employees:", err.message);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((employee) => employee._id !== id));
    } catch (err) {
      console.error("Failed to delete employee:", err.message);
    }
  };

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.role}{" "}
            <button onClick={() => handleDelete(employee._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeePage;
