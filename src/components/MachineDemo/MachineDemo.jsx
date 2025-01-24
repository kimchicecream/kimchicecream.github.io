import Machines from '../Machines';
import MachineDashboard from '../MachineDashboard';
import './MachineDemo.css';
import { useEffect } from 'react';

function MachineDemo() {

    // keep page static
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className='machine-demo-page'>
            <div className='nav-bar'>
                <div className='logo-container'>
                    <img src='/handwrytten_logo_2.png' alt='riddym' loading="lazy"/>
                </div>
                <span></span>
                <div className='options'>
                    <div className='option-item'>
                        <i className="fa-solid fa-gauge"></i>
                        <span className='tooltip'>Dashboard</span>
                    </div>
                    <div className='option-item'>
                        <i className="fa-solid fa-print"></i>
                        <span className='tooltip'>Machines</span>
                    </div>
                    <div className='option-item'>
                        <i className="fa-solid fa-bars-progress"></i>
                        <span className='tooltip'>Jobs</span>
                    </div>
                </div>
            </div>
            <div className='content'>
                <MachineDashboard />
                <Machines />
            </div>
        </div>
    )
};

export default MachineDemo;
