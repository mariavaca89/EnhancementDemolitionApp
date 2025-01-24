import React, { useState } from "react";
import { createSafetyReport } from "../../api/api";

const SafetyReportForm = ({ onReportAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    createdBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSafetyReport(formData);
      onReportAdded(formData);
      setFormData({ title: "", description: "", createdBy: "" });
    } catch (err) {
      console.error("Failed to add safety report:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Safety Report</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Created By</label>
        <input
          type="text"
          name="createdBy"
          value={formData.createdBy}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Report</button>
    </form>
  );
};

export default SafetyReportForm;
