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

    useEffect(() => {
        const logos = document.querySelectorAll('.tech .logos-container .tooltip img');

        logos.forEach(logo => {
            logo.addEventListener('mousemove', (e) => {
                const rect = logo.getBoundingClientRect();
                const x = e.clientX - (rect.left + rect.width / 2);
                const y = e.clientY - (rect.top + rect.height / 2);

                // Move the image towards the cursor more precisely
                logo.style.transform = `translate(${x / 8}px, ${y / 8}px)`;
            });

            logo.addEventListener('mouseleave', () => {
                // Reset the image position with a rubber band effect
                logo.style.transform = 'translate(0, 0)';
            });
        });

        return () => {
            logos.forEach(logo => {
                logo.removeEventListener('mousemove', null);
                logo.removeEventListener('mouseleave', null);
            });
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
            <div className='tech'>
                <h3 className='title'>Technologies</h3>
                <div className='logos-container'>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                        <span className='tooltiptext'>JavaScript</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                        <span className='tooltiptext'>Python</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />
                        <span className='tooltiptext'>MySQL</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" alt="Sequelize" />
                        <span className='tooltiptext'>Sequelize</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
                        <span className='tooltiptext'>CSS3</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
                        <span className='tooltiptext'>HTML5</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                        <span className='tooltiptext'>AWS</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" />
                        <span className='tooltiptext'>Node.js</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux" />
                        <span className='tooltiptext'>Redux</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask" />
                        <span className='tooltiptext'>Flask</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
                        <span className='tooltiptext'>Git</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                        <span className='tooltiptext'>React</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLite" />
                        <span className='tooltiptext'>SQLite</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" />
                        <span className='tooltiptext'>Photoshop</span>
                    </div>
                    <div className='tooltip'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" alt="Illustrator" />
                        <span className='tooltiptext'>Illustrator</span>
                    </div>
                </div>
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
            <div className='footer'>
                <span id='name'>Alex Harim Go</span>
                <span id='copyright'><i className="fa-regular fa-copyright"></i> 2024</span>
            </div>
        </div>
    )
}

export default Homepage;
