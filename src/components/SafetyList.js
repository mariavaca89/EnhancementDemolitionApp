import React, { useEffect, useState } from 'react';
import { getSafetyProtocols } from '../api';

const SafetyList = () => {
    const [protocols, setProtocols] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getSafetyProtocols();
            setProtocols(res.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h3>Safety Protocols</h3>
            <ul>
                {protocols.map((protocol) => (
                    <li key={protocol._id}>
                        <strong>{protocol.title}:</strong> {protocol.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SafetyList;
