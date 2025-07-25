import InformationBite from "../../components/InformationBite/InformationBite";
import NavBar from "../../components/NavBar/NavBar";
import { LuMapPin } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import "./New.css";

function New() {
    return (
        <div className="homepage">
            <div className="sticky-profile">
                <img className='profile-pic' src="../profile_pic.png" alt='Profile'></img>
                <div className="name">Alex Go</div>
                <div className="occupation">Software Engineer & Web Developer</div>
                <span></span>
                <div className="info-bite-container">
                    <InformationBite id='info-one' icon={<LuMapPin />} title="LOCATION" option="Tempe, AZ, USA" />
                    <InformationBite id='info-two' icon={<LuMail />} title="EMAIL" option="gohalexx@gmail.com" />
                    <InformationBite id='info-three' icon={<LuGithub />} title="GITHUB" option={<a href="https://github.com/kimchicecream" target="_blank" rel="noopener noreferrer">@kimchicecream</a>} />
                    <InformationBite id='info-four' icon={<LuLinkedin />} title="LINKEDIN" option={<a href="https://www.linkedin.com/in/alexxgo" target="_blank" rel="noopener noreferrer">in/alexxgo</a>} />
                </div>
                <div className="more-links">
                    <a href='https://github.com/kimchicecream' className="github"><LuGithub /></a>
                    <a href='https://www.linkedin.com/in/alexxgo' className="linkedin"><LuLinkedin /></a>
                    {/* <a href='' className="dribbble"></a>
                    <a href='' className="medium"></a> */}
                </div>
                <span></span>
                <div className="sticky-footer">
                    <div className="copyright">© 2025 Alex Go</div>
                    <div className="hyperlinks">
                        <a href='https://github.com/kimchicecream/kimchicecream.github.io' target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                </div>
            </div>
            <div className="contents-section">
                <NavBar />
            </div>
        </div>
    )
}

export default New;
