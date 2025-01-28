import { useState, useEffect } from 'react';
import './MachineJobs.css';

function MachineJobs() {
    const [machines, setMachines] = useState(Array.from({ length: 300 }, (_, i) => i + 1));
    const [selectedMachine, setSelectedMachine] = useState(null);
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchJobData(machine) {
        setLoading(true);
        setSelectedMachine(machine);
        try {
            const response = await fetch(`https://kimchicecream-github-io.onrender.com/api/scrape-jobs?machine=${machine}`);
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
            <h1>Machine Jobs Dashboard</h1>

            {/* Machine Selector */}
            <div className='machine-selector'>
                <h2>Select a Machine:</h2>
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

            {/* Job Data Display */}
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
                        <p>No job data available for this machine.</p>
                    ) : (
                        <p>Select a machine to see jobs.</p>
                    )
                )}
            </div>
        </div>
    )
};

export default MachineJobs;
