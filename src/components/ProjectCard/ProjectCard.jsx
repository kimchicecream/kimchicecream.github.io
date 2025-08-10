import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ imageSrc, timeframe, title, category, tech, to }) {
    const navigate = useNavigate();

    const go = () => navigate(to);
    return (
        <>
            <div
                className='project-card-container'
                role='button'
                tabIndex={0}
                onClick={go}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') go(); }}
                aria-label={`Open project ${title}`}
            >
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
