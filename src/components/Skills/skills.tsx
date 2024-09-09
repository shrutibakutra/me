import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';
import { useInView, InView } from "react-intersection-observer";
import "./skills.scss";

type SkillCategory = 'Programming' | 'Front-End ' | 'Back-End ' | 'Databases' | 'Tools' | 'Soft Skills';

const skillsData: Record<SkillCategory, string[]> = {
    "Programming": ["JavaScript", "Python", "SQL"],
    "Front-End ": ["React", "HTML", "CSS", "JavaScript"],
    "Back-End ": ["Node.js", "Express", "Django"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    "Tools": ["Git", "Webpack", "Docker", "VSCode"],
    "Soft Skills": ["Teamwork", "Problem-solving", "Communication", "Time management"]
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState<SkillCategory>('Programming');

    const { ref } = useInView({
        threshold: 0,
    });

    const toggle = (tab: SkillCategory) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const Component = ({ children }: any) => (
        <InView>
            {({ inView, ref, entry }) => (
                <div ref={ref}>
                    {children}
                </div>
            )}
        </InView>
    );

    return (
        <div className="skills" id="skills">
            <div className="skills__title">
                My Skills
            </div>
            <Nav pills>
                <div className="skills__nav-flex" ref={ref} >
                    {Object.keys(skillsData).map((skillCategory) => (
                        <div key={skillCategory}>
                            <NavItem className="skills__nav-flex__nav-item">
                                <NavLink
                                    className={classnames([{ active: activeTab === skillCategory }, "cta-button"])}
                                    onClick={() => toggle(skillCategory as SkillCategory)}
                                >
                                    {skillCategory}
                                </NavLink>
                            </NavItem>
                        </div>
                    ))}
                </div>
            </Nav>
            <TabContent activeTab={activeTab} >
                {Object.keys(skillsData).map((skillCategory) => (
                    <TabPane tabId={skillCategory} key={skillCategory}>
                        <Row>
                            <Col sm="12" >
                                <ul className="skills__nav-flex__ul" id={`skills-${skillCategory}`}>
                                    {skillsData[skillCategory as SkillCategory].map((skill, idx) => (
                                        <Component>
                                            <li key={idx} className="skills__nav-flex__ul__li">
                                                <div className="skills__nav-flex__ul__li__arrow"> &#10095;</div>
                                                <div>{skill}</div>
                                            </li>
                                        </Component>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </TabPane>
                ))}
            </TabContent>
        </div>
    );
};

export default Skills;
