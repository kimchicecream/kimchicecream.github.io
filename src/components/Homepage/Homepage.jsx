import './Homepage.css';

function Homepage() {
    return (
        <div className="home-container">
            <div className='hero'>
                <h1>Hi! I'm Alex.</h1>
                <h2>I love to</h2>
                <h2 id='build'>build</h2>
                <h2 id='fix'>fix</h2>
                <h2 id='create'>create</h2>
            </div>
            <div className='projects'></div>
            <div className='tech'></div>
            <div className='footer'></div>
        </div>
    )
}

export default Homepage;
