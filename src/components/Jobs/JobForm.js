import React, { useState } from "react";
import { createJob } from "../../api/api";

const JobForm = ({ onJobAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob(formData);
      onJobAdded(formData);
      setFormData({ title: "", details: "" });
    } catch (err) {
      console.error("Failed to add job:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Job</h2>
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
        <label>Details</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
