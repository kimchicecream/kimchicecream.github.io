import { useNavigate } from 'react-router-dom';
import './Riddym.css';

function Riddym() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div className='riddym-container'>
            <div className='top'>
                <div className='back-button' onClick={handleBack}>
                    <i className="fa-solid fa-arrow-left"></i><span>Back</span>
                </div>
            </div>
            <div className='content'>
                <h1>Under maintenance</h1>
            </div>
        </div>
    )
}

export default Riddym;
