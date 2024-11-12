import { useNavigate } from 'react-router-dom';
import './AboutPage.css';

function AboutPage() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className='about-page'>
            <div className='back-button' onClick={handleBack}>
                <i className="fa-solid fa-arrow-left"></i><span>Back</span>
            </div>
            <div className='content'>
                <div className='row-one'>
                    <div className='profile-block'>
                    </div>
                    <div className='description-block'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
