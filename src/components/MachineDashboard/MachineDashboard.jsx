import { useState, useEffect } from 'react';
import './MachineDashboard.css';

function MachineDashboard() {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Uncomment before pushing changes
                const response = await fetch('https://kimchicecream-github-io.onrender.com/api/scrape-performance');

                // Uncomment for local tests
                // const response = await fetch('http://localhost:5001/api/scrape-performance');

                const data = await response.json();
                // const filteredData = data.filter((_, index) => index !== 1 && index !== 3);
                setNumbers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='machine-dashboard'>
            <div className='title'>
                <h1>Dashboard</h1>
            </div>
            <div className='total-stats'>
                <div className='container'>
                    {numbers.length > 0 ? (
                        <div className='total-orders'>{numbers[0]}</div>
                    ) : (
                        <div className='rectangle-loader'></div>
                    )}
                    <div className='info'>
                        <p>Total open orders</p>
                        <i className="fa-solid fa-circle-info"></i>
                        <div className='tooltip'>The total number of orders that have not been pulled.</div>
                    </div>
                </div>
                <div className='container'>
                    {numbers.length > 2 ? (
                        <div className='total-orders'>{numbers[2]}</div>
                    ) : (
                        <div className='rectangle-loader'></div>
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
