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
                    <img src='/handwrytten_logo.png' alt='riddym' loading="lazy"/>
                </div>
                <div className='options'>
                    <i class="fa-solid fa-gauge"></i>
                    <i class="fa-solid fa-print"></i>
                    <i class="fa-solid fa-bars-progress"></i>
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
