import React, { useState } from 'react';
import { askAI } from '../api';

const AIHelper = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleAskAI = async () => {
        try {
            const res = await askAI(input);
            setResponse(res.data.choices[0].message.content);
        } catch (error) {
            setResponse('Error fetching AI response.');
        }
    };

    return (
        <div>
            <h3>AI Assistance</h3>
            <input type="text" placeholder="Ask AI..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAskAI}>Ask</button>
            <p>{response}</p>
        </div>
    );
};

export default AIHelper;
