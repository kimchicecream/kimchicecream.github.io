import PageTitle from '../../components/PageTitle';
import FeaturedProjectsCard from '../../components/FeaturedProjectsCard';
import './About.css';

function About() {
    return (
        <>
            <div className='about-container'>
                <PageTitle pageTitle='About Alex 👨🏻‍💻' />
                <div className='intro-block'>
                    <p>
                        My name is Alex! I'm software engineer who traded the beaches of <a href='https://share.google/9YXKtvvto4HpgwHYD' target="_blank" rel="noreferrer">Guam</a> for the hot and dry Arizona desert. I specialize in <span>full-stack web development</span> and intuitive <span>frontend UI/UX design and development</span>.
                    </p>
                </div>
                <div className='featured-projects'>
                    <h3 className='title'>Featured projects</h3>
                    <div className='cards-container'>
                        <FeaturedProjectsCard
                            sourceImg="/FeaturedProjectsImages/featured_melodica.png"
                            projectName="Melodica"
                            projectLink="https://github.com/kimchicecream/melodica"
                            enableHover={true}
                        />
                        <FeaturedProjectsCard
                            sourceImg="/FeaturedProjectsImages/featured_inkspectre.png"
                            projectName="Inkspectre"
                            enableHover={false}
                        />
                        {/* <FeaturedProjectsCard
                            sourceImg=""
                            projectName="babbl"
                        /> */}
                    </div>
                    <button className='more-projects'>See More Projects</button>
                </div>
            </div>
        </>
    );
};

export default About;
