import React from "react";

const SafetyReportList = ({ reports, onDelete }) => {
  return (
    <div>
      <h2>Safety Report List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Created By</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              <td>{report.title}</td>
              <td>{report.description}</td>
              <td>{report.createdBy}</td>
              <td>{new Date(report.date).toLocaleDateString()}</td>
              <td>
                <button onClick={() => onDelete(report._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SafetyReportList;
