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
            <div className='nav-bar'></div>
            <div className='content'>
                <MachineDashboard />
                <Machines />
            </div>
        </div>
    )
};

export default MachineDemo;
