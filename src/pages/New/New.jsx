import InformationBite from "../../components/InformationBite/InformationBite";
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
                <span></span>
                <div className="info-bite-container">
                    <InformationBite id='info-one' icon={<LuMapPin />} title="LOCATION" option="Tempe, AZ" />
                    <InformationBite id='info-one' icon={<LuMail />} title="EMAIL" option="gohalexx@gmail.com" />
                    <InformationBite id='info-one' icon={<LuGithub />} title="GITHUB" option="@kimchicecream" />
                    <InformationBite id='info-one' icon={<LuLinkedin />} title="LINKEDIN" option="in/alexxgo" />
                </div>

            </div>
            <div className="contents-section"></div>
        </div>
    )
}

export default New;
