import React, { useState } from 'react';
import { registerUser, loginUser } from '../api';

const AuthForm = ({ setToken }) => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [isRegister, setIsRegister] = useState(true);
    const [message, setMessage] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = isRegister ? await registerUser(form) : await loginUser(form);
            setMessage(res.data.message);
            if (!isRegister) {
                localStorage.setItem('token', res.data.token);
                setToken(res.data.token);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error occurred');
        }
    };

    return (
        <div>
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                {isRegister && <input name="name" placeholder="Name" onChange={handleChange} required />}
                <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
                <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                Switch to {isRegister ? 'Login' : 'Register'}
            </button>
            <p>{message}</p>
        </div>
    );
};

export default AuthForm;
