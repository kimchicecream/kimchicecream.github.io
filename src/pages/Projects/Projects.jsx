import PageTitle from '../../components/PageTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import TechBox from '../../components/TechBox/TechBox';
import StackIcon from "tech-stack-icons";
import './Projects.css';

function Projects() {
    return (
        <>
            <div className='projects-container'>
                <PageTitle pageTitle="Alex's Projects" />
                <span id='marker'></span>
                <div className='projects-content'>
                    <div className='filter'></div>
                    <div className='projects-display'>
                        <ProjectCard imageSrc="/FeaturedProjectsImages/featured_melodica.png" timeframe="September 2024 - December 2025" title="Melodica" category="Web"
                            tech={
                                <>
                                    <TechBox techLink='https://www.javascript.com/' techLogo={<StackIcon name="js" />} techName='JavaScript' />
                                    <TechBox techLink='https://react.dev/' techLogo={<StackIcon name="react" />} techName='React' />
                                    <TechBox techLink='https://redux.js.org/' techLogo={<StackIcon name="redux" />} techName='Redux' />
                                    <TechBox techLink='https://vite.dev/' techLogo={<StackIcon name="vitejs" />} techName='Vite' />
                                    <TechBox techLink='https://www.postgresql.org/' techLogo={<StackIcon name="postgresql" />} techName='PostgreSQL' />
                                    <TechBox techLink='https://flask.palletsprojects.com/en/stable/' techLogo={<StackIcon name="flask" />} techName='Flask' />
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
