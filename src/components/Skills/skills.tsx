import React from "react";
import { useInView } from "react-intersection-observer";
import "./skills.scss";

type SkillCategory = 'Languages' | 'Front-End' | 'Back-End' | 'Databases' | 'Tools' | 'Soft Skills';

const skillsData: Record<SkillCategory, string[]> = {
    "Languages": ["JavaScript", "Python", "SQL"],
    "Front-End": ["React", "HTML", "CSS", "JavaScript"],
    "Back-End": ["Node.js", "Express", "Django"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    "Tools": ["Git", "Webpack", "Docker", "VSCode"],
    "Soft Skills": ["Teamwork", "Problem-solving", "Communication", "Time management"]
};

const categoryColors: Record<SkillCategory, string> = {
    "Languages": "#4388b3",
    "Front-End": "#5aa8d4",
    "Back-End": "#2e6a8e",
    "Databases": "#3a7da5",
    "Tools": "#6eb5d4",
    "Soft Skills": "#8ecae6"
};

const Skills = () => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <div className="skills" id="skills" ref={ref}>
            <div className="skills__title">My Skills</div>
            <div className={`skills__cloud${inView ? ' skills__cloud--visible' : ''}`}>
                {(Object.keys(skillsData) as SkillCategory[]).map((category) => (
                    <div key={category} className="skills__group">
                        <div className="skills__group-label">{category}</div>
                        <div className="skills__group-tags">
                            {skillsData[category].map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="skills__tag"
                                    style={{ '--tag-color': categoryColors[category] } as React.CSSProperties}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
