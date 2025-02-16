import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthForm setToken={setToken} />} />
                <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
