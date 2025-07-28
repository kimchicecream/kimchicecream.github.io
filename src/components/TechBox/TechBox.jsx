import './TechBox.css';

function TechBox({ techLink, techLogo, techName }) {
    return (
        <div className="techbox-container">
            <a href={techLink} target="_blank" rel="noreferrer">
                <div className='tech-logo'>{techLogo}</div>
                <div className='tech-name'>{techName}</div>
            </a>
        </div>
    );
};

export default TechBox;
