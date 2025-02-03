import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/photos/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setMessage(res.data.message);
        } catch (error) {
            setMessage('File upload failed.');
        }
    };

    return (
        <div>
            <h3>Upload File</h3>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <p>{message}</p>
        </div>
    );
};

export default FileUpload;
