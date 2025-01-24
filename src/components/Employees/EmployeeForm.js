import React, { useState } from "react";
import { createEmployee } from "../../api/api";

const EmployeeForm = ({ onEmployeeAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee(formData);
      onEmployeeAdded(formData);
      setFormData({ name: "", role: "", email: "" });
    } catch (err) {
      console.error("Failed to add employee:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Role</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
