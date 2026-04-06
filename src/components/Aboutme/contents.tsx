import React, { useEffect, useState } from "react";

const roles = ["Software Developer", "Front-End Engineer", "React Developer"];

const Contents = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, roleIndex]);

    return (
        <div className="aboutme__content__inside">
            <h1>Shruti Bakutra</h1>
            <div className="aboutme__content__inside__dev">
                {displayed}<span className="cursor">|</span>
            </div>
            <div className="aboutme__content__inside__details">
                <div>
                    Hi! I'm Shruti, a software developer with over 5 years of experience, specializing in front-end development. I'm passionate about building beautiful and efficient web applications, primarily using JavaScript and React.
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
                    href="/me/Resume_Shruti_Bakutra.pdf"
                    download="Resume_Shruti_Bakutra.pdf"
                    className="portfolio__item-link">
                    Get Resume
                </a>
            </div>
        </div>
    );
};

export default Contents;
