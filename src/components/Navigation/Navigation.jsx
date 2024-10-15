import { useNavigate } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
    };

    return (
        <div className="nav-container">
            <div className='section-one'>
                <div className='image-container'>
                    <img src='/portfolio_logo.svg' alt='Logo' className='logo'/>
                </div>
                <div className='about' onClick={handleAboutClick}>
                    <h3>Alex Go</h3>
                    <h6>Full Stack Developer</h6>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
