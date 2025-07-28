import PageTitle from '../../components/PageTitle';
import FeaturedProjectsCard from '../../components/FeaturedProjectsCard';
import GitHubCalendar from 'react-github-calendar';
import TechBox from '../../components/TechBox/TechBox';
import StackIcon from "tech-stack-icons";
import { PiLightningBold } from "react-icons/pi";
import './About.css';

const myTheme = {
    light: [
        "rgb(45 40 73)",
        "rgb(74 67 126)",
        "rgb(96 87 167)",
        "rgb(118 109 210)",
        "rgb(140 132 255)"
    ],
    dark: [
        "rgb(45 40 73)",
        "rgb(74 67 126)",
        "rgb(96 87 167)",
        "rgb(118 109 210)",
        "rgb(140 132 255)"
    ],
};

function About() {
    return (
        <>
            <div className='about-container'>
                <PageTitle pageTitle='About Alex 👨🏻‍💻' />
                <div className='intro-block'>
                    <p>
                        My name is Alex! I'm software engineer who traded the beaches of <a href='https://share.google/9YXKtvvto4HpgwHYD' target="_blank" rel="noreferrer">Guam</a> 🇬🇺 for the hot and dry Arizona desert. I specialize in <span>full-stack development</span> and intuitive <span>frontend UI/UX design and development</span>.
                    </p>
                </div>
                <div className='github-calendar-wrapper'>
                    <h3 className='title'>Github Contributions</h3>
                    <GitHubCalendar
                        username="kimchicecream"
                        theme={myTheme}
                        fontSize={16}
                    />
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
                </div>
                <div className='more-about'>
                    <div className='writings'></div>
                    <div className='tech-stack'>
                        <div className='frontend'>
                            <div className='title'>
                                <PiLightningBold /> <span>Frontend</span>
                            </div>
                            <TechBox techLink='https://www.javascript.com/' techLogo={<StackIcon name="js" />} techName='JavaScript' />
                        </div>
                        <div className='backend'>
                            <div className='title'>
                                <PiLightningBold /> <span>Backend</span>
                            </div>

                        </div>
                        <div className='database'>
                            <div className='title'>
                                <PiLightningBold /> <span>Database</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
