import { useState, useEffect } from 'react';
import './MachineDashboard.css';

function MachineDashboard() {
    const [numbers, setNumbers] = useState(() => {
        return JSON.parse(sessionStorage.getItem('cachedNumbers')) || [];
    });
    const [loading, setLoading] = useState(numbers.length === 0);

    useEffect(() => {
        async function fetchData() {
            try {
                const cacheTime = sessionStorage.getItem('cacheTime');
                const now = Date.now();

                // if cache is less than 5 minutes old, use it and skip fetch
                if (cacheTime && now - cacheTime < 2 * 60 * 1000) {
                    console.log('[LOG] Using cached data from sessionStorage.');
                    return;
                }

                console.log('[LOG] Fetching new data...');

                // uncomment before pushing changes
                // const response = await fetch('https://kimchicecream-github-io.onrender.com/api/scrape-performance');

                // uncomment for local tests
                const response = await fetch('http://localhost:5001/api/scrape-performance');

                const data = await response.json();

                setNumbers(data);
                sessionStorage.setItem('cachedNumbers', JSON.stringify(data));
                sessionStorage.setItem('cacheTime', now.toString());
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        const interval = setInterval(fetchData, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='machine-dashboard'>
            <div className='title'>
                <h1>Dashboard</h1>
            </div>
            <div className='total-stats'>
                <div className='container'>
                    {loading ? (
                        <div className='rectangle-loader'></div>
                    ) : (
                        <div className='total-orders'>{numbers[0] || 'N/A'}</div>
                    )}
                    <div className='info'>
                        <p>Total open orders</p>
                        <i className="fa-solid fa-circle-info"></i>
                        <div className='tooltip'>The total number of orders that have not been pulled.</div>
                    </div>
                </div>
                <div className='container'>
                    {loading ? (
                        <div className='rectangle-loader'></div>
                    ) : (
                        <div className='total-orders'>{numbers[2] || 'N/A'}</div>
                    )}
                    <div className='info'>
                        <p>Orders completed today</p>
                        <i className="fa-solid fa-circle-info"></i>
                        <div className='tooltip'>The total number of orders fulfilled.</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MachineDashboard;
