import './Homepage.css';

function Homepage() {
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
                    <h2>Riddym</h2>
                    <img src='../../public/riddym/riddym-homepage.png' alt='riddym' />
                </div>
                <div className='project' id='babbl'>

                </div>
                <div className='project' id='fortbnb'>

                </div>
            </div>
            <div className='tech'></div>
            <div className='footer'>
                <span id='name'>Alex Go</span>
                <span id='copyright'><i className="fa-regular fa-copyright"></i> 2024</span>
            </div>
        </div>
    )
}

export default Homepage;
