import React from 'react';
import SafetyList from './SafetyList';
import AddSafetyForm from './AddSafetyForm';
import FileUpload from './FileUpload';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AddSafetyForm />
            <SafetyList />
            <FileUpload />  {/* ✅ Add File Upload */}
        </div>
    );
};

export default Dashboard;
