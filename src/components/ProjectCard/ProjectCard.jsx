import './ProjectCard.css';

function ProjectCard({ imageSrc, timeframe, title, category, tech }) {
    return (
        <>
            <div className='project-card-container'>
                <div className='project-img'>
                    <img src={imageSrc} />
                </div>
                <div className='desc'>
                    <div className='timeframe-category'>
                        <span id='timeframe'>{timeframe}</span>
                        <span id='category'>{category}</span>
                    </div>
                    <h3 id='title'>{title}</h3>
                    <div className='project-techs'>{tech}</div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
