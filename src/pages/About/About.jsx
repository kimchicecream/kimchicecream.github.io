import PageTitle from '../../components/PageTitle';
import './About.css';

function About() {
    return (
        <>
            <div className='about-container'>
                <PageTitle pageTitle='About Alex 👨🏻‍💻' />
                <div className='intro-block'>
                    <p>
                        My name is Alex, a software engineer who traded the beaches of Guam for the hot and dry Arizona desert. I specialize in full-stack web development and intuitive UI/UX design.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
