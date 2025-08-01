import TechBox from '../TechBox/TechBox';
import './ProjectCard.css';

function ProjectCard() {
    return (
        <>
            <div className='project-card-container'>
                <div className='img'></div>
                <div className='desc'>
                    <span id='timeframe'></span>
                    <div className='title-category'>
                        <h3 id='title'></h3>
                        <span id='category'></span>
                    </div>
                    <div className='project-techs'>
                        <TechBox />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
