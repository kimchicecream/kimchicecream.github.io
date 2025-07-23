import './InformationBite.css';

function InformationBite( { icon, title, option }) {
    return (
        <div className='information-bite'>
            <div className='boxed-icon'>{icon}</div>
            <div className="information-container">
                <div className='title'>{title}</div>
                <div className='option'>{option}</div>
            </div>
        </div>
    );
}

export default InformationBite;
