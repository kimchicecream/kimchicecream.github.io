import PageTitle from '../../components/PageTitle';
import FeaturedProjects from '../../components/FeaturedProjects';
import './About.css';

function About() {
    return (
        <>
            <div className='about-container'>
                <PageTitle pageTitle='About Alex 👨🏻‍💻' />
                <div className='intro-block'>
                    <p>
                        My name is Alex, a software engineer who traded the beaches of Guam for the hot and dry Arizona desert. I specialize in <span>full-stack web development</span> and intuitive <span>frontend UI/UX design and development</span>.
                    </p>
                </div>
                <FeaturedProjects />
            </div>
        </>
    );
};

export default About;
