import { useState, useEffect } from 'react';
import './MachineJobs.css';

function MachineJobs() {
    const [machines, setMachines] = useState(Array.from({ length: 110 - 71 + 1 }, (_, i) => i + 71));
    const [selectedMachine, setSelectedMachine] = useState(null);
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(false);

    // const machinesColumn1 = Array.from({ length: (90 - 72) / 2 + 1 }, (_, i) => 72 + i * 2); // even: 72-90
    // const machinesColumn2 = Array.from({ length: (89 - 71) / 2 + 1 }, (_, i) => 71 + i * 2); // odd: 71-89
    // const machinesColumn3 = Array.from({ length: (109 - 91) / 2 + 1 }, (_, i) => 91 + i * 2); // odd: 91-109
    // const machinesColumn4 = Array.from({ length: (110 - 92) / 2 + 1 }, (_, i) => 92 + i * 2); // even: 92-110

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

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
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='machine-jobs-container'>
            {/* <div className='title'>
                <h1>Jobs</h1>
            </div> */}
            <div className='general-info'>
                <div className='left-column'>
                    <div className='big-box' id='1'></div>
                    <div className='big-box' id='2'></div>
                </div>
                <div className='right-column'>
                    <div className='small-box' id='1'></div>
                    <div className='small-box' id='2'></div>
                    <div className='small-box' id='3'></div>
                    <div className='small-box' id='4'></div>
                </div>
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
                                <h3>Machine {selectedMachine}</h3>
                                <h4>Current total jobs:</h4>
                                {jobData.map((group, index) => (
                                    <div key={index} className='job-group'>
                                        <h4 className='main-file-title'>{group.pdfFile}</h4>
                                        <div className='file-names'>
                                            {group.dataRows.map((row, i) => (
                                                <div className='files' key={i}>{row.join(' | ')}</div>
                                            ))}
                                        </div>
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
