import PageTitle from '../../components/PageTitle';
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

                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
