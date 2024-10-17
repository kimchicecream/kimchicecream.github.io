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
                    <div className='image-i'>
                        <img src='/icon_pic.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
