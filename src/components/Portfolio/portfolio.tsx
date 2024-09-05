import React from "react";
import "./portfolio.scss";
import { data } from "./portfolio-data";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio__title">Portfolio</div>
            <div className="portfolio__list">
                {data.map((project, index) => (
                    <div key={index} className="portfolio__item">
                        <h3 className="portfolio__item-title">{project.name}</h3>
                        <p className="portfolio__item-intro">{project.introduction}</p>
                        <div className="portfolio__item-techstack">
                            <strong>Tech Stack:</strong>
                            <ul>
                                {project.techStack.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio__item-link">
                            Visit Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Portfolio;