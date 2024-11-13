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
                    <div className='profile block'>
                        <img src='IMG_3469.JPG'></img>
                    </div>
                    <div className='description block'>
                        <div className='text-block'>
                            <p className='header'>Hi, my name is Alex!</p>
                            <p className='body'>I'm from Guam, born in Gwangju, South Korea, and currently based in Tempe, Arizona.
                                With a passion for design and immersive technology, I aspire to be a part of the advancements in VR and AR,
                                helping shape the future of digital experiences. I also want to see us colonize Mars in my lifetime!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
