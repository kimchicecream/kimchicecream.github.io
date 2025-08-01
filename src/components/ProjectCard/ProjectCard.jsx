import './ProjectCard.css';

function ProjectCard({ imageSrc, timeframe, title, category, tech }) {
    return (
        <>
            <div className='project-card-container'>
                <div className='project-img'>{imageSrc}</div>
                <div className='desc'>
                    <span id='timeframe'>{timeframe}</span>
                    <div className='title-category'>
                        <h3 id='title'>{title}</h3>
                        <span id='category'>{category}</span>
                    </div>
                    <div className='project-techs'>{tech}</div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
