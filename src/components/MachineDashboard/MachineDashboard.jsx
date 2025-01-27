import { useState, useEffect } from 'react';
import './MachineDashboard.css';

function MachineDashboard() {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // LIVE
                const response = await fetch('https://kimchicecream-github-io.onrender.com/api/scrape-performance');
                // LOCAL
                // const response = await fetch('http://localhost:5001/api/scrape-performance');
                const data = await response.json();
                setNumbers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='machine-dashboard'>
            <h1>Performance Data</h1>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    )
};

export default MachineDashboard;
