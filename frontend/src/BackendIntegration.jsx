import React, { useState } from 'react';
import axios from 'axios';

const BackendIntegration = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/generate'); // Update the URL to your backend
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Backend Integration</h1>
            <button onClick={fetchData}>Fetch Data</button>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default BackendIntegration;

