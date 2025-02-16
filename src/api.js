import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: { 'Content-Type': 'application/json' },
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

// Auth APIs
export const registerUser = (userData) => API.post('/api/auth/register', userData);
export const loginUser = (userData) => API.post('/api/auth/login', userData);

// Safety APIs
export const getSafetyProtocols = () => API.get('/api/safety');
export const addSafetyProtocol = (data) => API.post('/api/safety/add', data);

// AI Assistant API
export const askAI = (prompt) => {
    return axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
    }, {
        headers: { 'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}` }
    });
};
