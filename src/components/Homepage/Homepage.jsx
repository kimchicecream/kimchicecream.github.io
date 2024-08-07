import React, { useEffect } from 'react';
import './Homepage.css';

function Homepage() {
    useEffect(() => {
        const handleScroll = () => {
            const projects = document.querySelectorAll('.project');
            const threshold = 150; // Adjust this value to control when the fade-in starts
            projects.forEach((project) => {
                const rect = project.getBoundingClientRect();
                if (rect.top < window.innerHeight - threshold && rect.bottom >= threshold) {
                    project.classList.add('visible');
                } else {
                    project.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home-container">
            <div className='hero'>
                <p id='welcome'>Welcome.</p>
                <p id='paragraph'>
                    Alex is a full-stack software developer specializing in dynamic applications and UI/UX design.
                    His keen eye for detail and adaptive coding skills bring creativity and innovation to every project.
                </p>
            </div>
            <div className='projects'>
                <h3 className='title'>Projects</h3>
                <div className='project' id='riddym'>
                    <div className='top-bar'>
                        <div className='dot-container'>
                            <div className='dot' id='dot-one'></div>
                            <div className='dot' id='dot-two'></div>
                            <div className='dot' id='dot-three'></div>
                        </div>
                        <div className='search-bar'>
                            <img src='/riddym/riddym-logo.png'/>
                            <span>https://riddym.onrender.com</span>
                        </div>
                    </div>
                    <img src='/riddym/riddym-sample.png' alt='riddym'/>
                </div>
                <div className='project' id='babbl'>
                    <div className='top-bar'>
                        <div className='dot-container'>
                            <div className='dot' id='dot-one'></div>
                            <div className='dot' id='dot-two'></div>
                            <div className='dot' id='dot-three'></div>
                        </div>
                        <div className='search-bar'>
                        <img src='/babbl/babbl-logo.png'/>
                            <span>https://babbl.onrender.com</span>
                        </div>
                    </div>
                    <img src='/babbl/babbl-sample.png' alt='riddym'/>
                </div>
                <div className='project' id='fortbnb'>
                    <div className='top-bar'>
                        <div className='dot-container'>
                            <div className='dot' id='dot-one'></div>
                            <div className='dot' id='dot-two'></div>
                            <div className='dot' id='dot-three'></div>
                        </div>
                        <div className='search-bar'>
                            <img src='/fortbnb/fortbnb-logo.png'/>
                            <span>https://fortbnb.onrender.com</span>
                        </div>
                    </div>
                    <img src='/fortbnb/fortbnb-homepage.png' alt='riddym'/>
                </div>
                <div className="project" id='dummy'></div>
            </div>
            <div className='tech'></div>
            <div className='footer'>
                <span id='name'>Alex Harim Go</span>
                <span id='copyright'><i className="fa-regular fa-copyright"></i> 2024</span>
            </div>
        </div>
    )
}

export default Homepage;
