import React from "react";
import "./aboutme.scss";
import Me from "../../assests/shruti.jpg";
import Contents from "./contents";

const AboutMe = () => {
    return (
        <div className="aboutme" id="about">
            <div className="aboutme__content"> 
                <Contents />
            </div>
            <div className="aboutme__me-img">
                <img src={Me} alt=""/>
            </div>
        </div>
    )
}
export default AboutMe;