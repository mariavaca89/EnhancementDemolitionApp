import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to EDA</h1>
            <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </div>
    );
};

export default Home;
