import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';
import { useInView, InView } from "react-intersection-observer";
import "./skills.scss";

type SkillCategory = 'Languages' | 'Front-End ' | 'Back-End ' | 'Databases' | 'Tools' | 'Soft Skills';

const skillsData: Record<SkillCategory, string[]> = {
    "Languages": ["JavaScript", "Python", "SQL"],
    "Front-End ": ["React", "HTML", "CSS", "JavaScript"],
    "Back-End ": ["Node.js", "Express", "Django"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    "Tools": ["Git", "Webpack", "Docker", "VSCode"],
    "Soft Skills": ["Teamwork", "Problem-solving", "Communication", "Time management"]
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState<SkillCategory>('Languages');

    const { ref } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    const toggle = (tab: SkillCategory) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const Component = ({ children }: any) => (
        <InView triggerOnce>
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
                <div className="skills__nav-flex">
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
                            <Col sm="12">
                            <div ref={ref}>
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
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                ))}
                <div></div>
            </TabContent>
        </div>
    );
};

export default Skills;
