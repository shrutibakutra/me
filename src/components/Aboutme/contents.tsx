import React from "react";

const Contents = () => {
    return (
        <div className="aboutme__content__inside">
            <h1>Shruti Bakutra</h1>
            <div className="aboutme__content__inside__dev">
                Web Developer
            </div>
            <div className="aboutme__content__inside__details">
                <div>
                    Hi! I'm Shruti, a software developer with over 5 years of experience, specializing in front-end development. I’m passionate about building beautiful and efficient web applications, primarily using JavaScript and React.
                </div>
                <div>
                    I hold a degree in Physics, which has sharpened my problem-solving skills and attention to detail. I love making the web more accessible and enjoyable for everyone.
                </div>
                <div>
                    I'm always excited to collaborate on new projects and explore job opportunities that align with my expertise. If you're looking for a dedicated front-end developer, I'd love to chat!
                </div>
            </div>
            <div>
                <a
                    href="https://docs.google.com/document/d/1U53dvpoClLt-9xMYVvp_MFxDIc_7yEpcNYjmqtw2Qd8/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__item-link">
                    Get Resume
                </a>
            </div>
        </div>
    )
}
export default Contents;