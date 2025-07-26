import { LuEye } from "react-icons/lu";
import './FeaturedProjectsCards.css';

function FeaturedProjectsCards({ sourceImg, projectName, enableHover = true }) {
    return (
        <>
            <div className={`featured-projects-card ${enableHover ? "hover-enabled" : ""}`}>
                <div className='project-img'>
                    <img src={sourceImg}></img>
                    <div className='img-overlay'>
                        <LuEye className="eye-icon" />
                    </div>
                </div>
                <div className='project-name'>{projectName}</div>
            </div>
        </>
    );
};

export default FeaturedProjectsCards;
