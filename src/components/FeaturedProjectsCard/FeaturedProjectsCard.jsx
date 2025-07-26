import { LuEye } from "react-icons/lu";
import './FeaturedProjectsCards.css';

function FeaturedProjectsCard({ sourceImg, projectName, enableHover = true, projectLink }) {
    const CardContent = (
        <div className={`featured-projects-card ${enableHover ? "hover-enabled" : ""}`}>
            <div className="project-img">
                <img src={sourceImg} alt={projectName} />
                <div className="img-overlay">
                    <LuEye className="eye-icon" />
                </div>
            </div>
            <div className="project-name">{projectName}</div>
        </div>
    );

    return projectLink ? (
        <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-project-link"
        >
            {CardContent}
        </a>
    ) : (
        CardContent
    );
}

export default FeaturedProjectsCard;
