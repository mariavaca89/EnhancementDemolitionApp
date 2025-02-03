import React, { useState } from 'react';
import { addSafetyProtocol } from '../api';

const AddSafetyForm = () => {
    const [form, setForm] = useState({ title: '', description: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await addSafetyProtocol(form);
            setMessage(res.data.message);
        } catch (error) {
            setMessage('Error adding safety protocol');
        }
    };

    return (
        <div>
            <h3>Add Safety Protocol</h3>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" onChange={handleChange} required />
                <input name="description" placeholder="Description" onChange={handleChange} required />
                <button type="submit">Add</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default AddSafetyForm;
