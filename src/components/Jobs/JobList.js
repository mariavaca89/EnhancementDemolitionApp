import React from "react";

const JobList = ({ jobs, onDelete }) => {
  return (
    <div>
      <h2>Job List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.title}</td>
              <td>{job.details}</td>
              <td>
                <button onClick={() => onDelete(job._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
