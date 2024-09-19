import { useNavigate } from 'react-router-dom';
import './Fortbnb.css';

function Fortbnb() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className='fortbnb-container'>
            <div className='top'>
                <div className='back-button' onClick={handleBack}>
                    <i className="fa-solid fa-arrow-left"></i><span>Back</span>
                </div>
            </div>
            <div className='content'>
                <h1>Undergoing a design process...</h1>
            </div>
        </div>
    )
}

export default Fortbnb;
