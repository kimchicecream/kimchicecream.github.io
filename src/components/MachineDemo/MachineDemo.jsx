import Machines from '../Machines';
import MachineDashboard from '../MachineDashboard';
import './MachineDemo.css';

function MachineDemo() {
    return (
        <div className='machine-demo-page'>
            <div className='nav-bar'>
            </div>
            <div className='content'>
                <MachineDashboard />
                <Machines />
            </div>
        </div>
    )
};

export default MachineDemo;
