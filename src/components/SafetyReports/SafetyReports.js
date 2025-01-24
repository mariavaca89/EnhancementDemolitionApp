import React, { useState, useEffect } from "react";
import { getAllSafetyReports, deleteSafetyReport } from "../../api/api";

const SafetyReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const { data } = await getAllSafetyReports();
        setReports(data);
      } catch (err) {
        console.error("Failed to fetch safety reports:", err.message);
      }
    };
    fetchReports();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSafetyReport(id);
      setReports((prev) => prev.filter((report) => report._id !== id));
    } catch (err) {
      console.error("Failed to delete safety report:", err.message);
    }
  };

  return (
    <div>
      <h1>Safety Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            {report.title} - {report.description}{" "}
            <button onClick={() => handleDelete(report._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SafetyReports;
