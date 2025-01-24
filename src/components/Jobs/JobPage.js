import React, { useState, useEffect } from "react";
import { getAllJobs, deleteJob } from "../../api/api";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await getAllJobs();
        setJobs(data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err.message);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      console.error("Failed to delete job:", err.message);
    }
  };

  return (
    <div>
      <h1>Job List</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            {job.title} - {job.details}{" "}
            <button onClick={() => handleDelete(job._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPage;
