import { useState, useEffect } from 'react';
import './MachineJobs.css';

function MachineJobs() {
    const [machines] = useState(Array.from({ length: 110 - 71 + 1 }, (_, i) => i + 71));
    const [selectedMachine, setSelectedMachine] = useState(null);
    const [jobData, setJobData] = useState([]);
    const [loadingMachine, setLoadingMachine] = useState(false);
    const [loading, setLoading] = useState();

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
        if (selectedMachine === machine) {
            setSelectedMachine(null);
            return;
        }

        setLoadingMachine(machine);
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
            setJobData(prevData => ({
                ...prevData,
                [machine]: []
            })); // clear job data if request fails
        } finally {
            setLoadingMachine(false);
        }
    }

    return (
        <div className='machine-jobs-container'>
            {/* <div className='title'>
                <h1>Jobs</h1>
            </div> */}
            <div className='general-info'>
                <div className='left-column'>
                    <div className='big box' id='b1'>
                        <div className='info-num'>
                            {loading ? (
                                <div className='rectangle-loader'></div>
                            ) : (
                                <div className='total-orders'>{'N/A'}</div>
                            )}
                        </div>
                        <div className='info'>
                            <p>Open machines</p>
                            <i className="fa-solid fa-circle-info"></i>
                            <div className='tooltip'>The total number of unemployed machines. Unbelievable!</div>
                        </div>
                    </div>
                    <div className='big box' id='b2'>
                        <div className='info-num'>
                            {loading ? (
                                <div className='rectangle-loader'></div>
                            ) : (
                                <div className='total-orders'>{'N/A'}</div>
                            )}
                        </div>
                        <div className='info'>
                            <p>Total jobs</p>
                            <i className="fa-solid fa-circle-info"></i>
                            <div className='tooltip'>The total number of jobs currently running.</div>
                        </div>
                    </div>
                </div>
                <div className='right-column'>
                </div>
            </div>
            <div className='machines-module'>
                <div className='title'>
                    <h3>Your Penbots <p>{machines.length}</p></h3>
                </div>
                <div className='machine-selector'>
                    <div className='machine-list'>
                        <div className='labels'></div>
                        {machines.map((machine) => (
                            <div key={machine} className='machine-container'>
                                <button
                                    className={`machine-button ${selectedMachine === machine ? 'selected' : ''}`}
                                    onClick={() => fetchJobData(machine)}
                                >
                                    <div className='machine-num'>{machine}</div>
                                    <div className='num-jobs'>1</div>
                                    <div className='pages-left'>58</div>
                                    <div className='note-env'>NE</div>
                                    <div className='status'>
                                        <div className='led'></div>
                                    </div>
                                </button>
                                {selectedMachine === machine && (
                                    <div className='job-dropdown'>
                                        {loadingMachine === machine ? (
                                            <div className='loading'>Loading...</div>
                                        ) : (
                                            jobData[machine]?.length > 0 ? (
                                                jobData[machine].map((group, index) => (
                                                    <div key={index} className='job-group'>
                                                        <h4 className='main-file-title'>{group.pdfFile}</h4>
                                                        <div className='file-names'>
                                                            {group.dataRows.map((row, i) => (
                                                                <div className='files' key={i}>{row.join(' | ')}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className='no-jobs'>No jobs found.</p>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MachineJobs;
