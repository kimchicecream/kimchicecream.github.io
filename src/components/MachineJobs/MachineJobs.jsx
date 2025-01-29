import { useState, useEffect } from 'react';
import './MachineJobs.css';

function MachineJobs() {
    const [machines, setMachines] = useState(Array.from({ length: 110 - 71 + 1 }, (_, i) => i + 71));
    const [selectedMachine, setSelectedMachine] = useState(null);
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchJobData(machine) {
        setLoading(true);
        setSelectedMachine(machine);

        // dynamically determine backend URL
        const BASE_URL = window.location.hostname === 'localhost'
            ? 'http://localhost:5001'
            : 'https://kimchicecream-github-io.onrender.com';

        try {
            // const response = await fetch(`https://kimchicecream-github-io.onrender.com/api/scrape-jobs?machine=${machine}`);
            // change port for new machines
            const response = await fetch(`http://localhost:5001/api/scrape-jobs?machine=${machine}`);
            const data = await response.json();
            setJobData(data.extractedData || []);
        } catch (error) {
            console.error('Error fetching machine data:', error);
            setJobData([]); // clear job data if request fails
        }
        setLoading(false);
    }

    return (
        <div className='machine-jobs-container'>
            <div className='title'>
                <h1>Jobs</h1>
            </div>
            <div className='machines-module'>
                <div className='machine-selector'>
                    <div className='machine-list'>
                        {machines.map((machine) => (
                            <button
                                key={machine}
                                className={selectedMachine === machine ? 'selected' : ''}
                                onClick={() => fetchJobData(machine)}
                            >
                                Machine {machine}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='job-data'>
                    {loading ? (
                        <div className='loading'>Loading...</div>
                    ) : (
                        selectedMachine && jobData.length > 0 ? (
                            <div>
                                <h3>Jobs for Machine {selectedMachine}</h3>
                                {jobData.map((group, index) => (
                                    <div key={index} className='job-group'>
                                        <h4>{group.pdfFile}</h4>
                                        <ul>
                                            {group.dataRows.map((row, i) => (
                                                <li key={i}>{row.join(' | ')}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : selectedMachine ? (
                            <p>Unbelievable. No jobs here so far!</p>
                        ) : (
                            <p>Select a machine to see jobs.</p>
                        )
                    )}
                </div>
            </div>
        </div>
    )
};

export default MachineJobs;
