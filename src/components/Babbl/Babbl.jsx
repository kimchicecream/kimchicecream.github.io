import { useNavigate } from 'react-router-dom';
import './Babbl.css';

function Babbl () {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className='babbl-container'>
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

export default Babbl;
