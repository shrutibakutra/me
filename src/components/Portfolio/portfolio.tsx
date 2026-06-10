import React, { useState } from "react";
import "./portfolio.scss";
import { data } from "./portfolio-data";

const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeProject, setActiveProject] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
    const [carouselIndexes, setCarouselIndexes] = useState<Record<number, number>>({});

    const toggleExpand = (index: number) => {
        setExpandedCards(prev => {
            const next = new Set(prev);
            next.has(index) ? next.delete(index) : next.add(index);
            return next;
        });
    };

    const openModal = (media: string[], startIndex = 0) => {
        setActiveProject(media);
        setActiveIndex(startIndex);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveProject([]);
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % activeProject.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + activeProject.length) % activeProject.length);
    };

    const getCarouselImages = (project: any): string[] =>
        (project.knowMore || []).filter((item: string) => !item.endsWith('.mp4'));

    const getCardIndex = (cardIndex: number) => carouselIndexes[cardIndex] || 0;

    const stepCard = (e: React.MouseEvent, cardIndex: number, total: number, dir: 1 | -1) => {
        e.stopPropagation();
        setCarouselIndexes(prev => ({
            ...prev,
            [cardIndex]: ((prev[cardIndex] || 0) + dir + total) % total,
        }));
    };

    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio__title">Portfolio</div>
            <div className="portfolio__list">
                {data.map((project: any, index) => {
                    const images = getCarouselImages(project);
                    const cardIdx = getCardIndex(index);
                    const size = project.size || 'normal';
                    const isExpanded = expandedCards.has(index);
                    const isLarge = size === 'large';
                    const hasVideos = (project.knowMore || []).some((m: string) => m.endsWith('.mp4'));

                    return (
                        <div key={index} className={`portfolio__item portfolio__item--${size}`}>
                            {images.length > 0 && (
                                <div
                                    className="portfolio__item-thumb portfolio__item-thumb--carousel"
                                    onClick={() => openModal(project.knowMore, project.knowMore.indexOf(images[cardIdx]))}
                                >
                                    <img src={images[cardIdx]} alt={`${project.name} ${cardIdx + 1}`} />
                                    {images.length > 1 && (
                                        <>
                                            <button
                                                className="portfolio__item-thumb__nav portfolio__item-thumb__nav--prev"
                                                onClick={(e) => stepCard(e, index, images.length, -1)}
                                            >&#10094;</button>
                                            <button
                                                className="portfolio__item-thumb__nav portfolio__item-thumb__nav--next"
                                                onClick={(e) => stepCard(e, index, images.length, 1)}
                                            >&#10095;</button>
                                            <div className="portfolio__item-thumb__dots">
                                                {images.map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className={`portfolio__item-thumb__dot${i === cardIdx ? ' portfolio__item-thumb__dot--active' : ''}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                            <div className="portfolio__item-body">
                                <div className="portfolio__item-flex">
                                    <h3 className="portfolio__item-title">{project.name}</h3>
                                    {project.active && (
                                        <span className="portfolio__item-active">
                                            <span className="portfolio__item-active__dot" />
                                            Active
                                        </span>
                                    )}
                                </div>
                                <p className={`portfolio__item-intro${!isExpanded && !isLarge ? ' portfolio__item-intro--clamped' : ''}`}>
                                    {project.introduction}
                                </p>
                                {!isLarge && project.introduction.length > 150 && (
                                    <button className="portfolio__item-readmore" onClick={() => toggleExpand(index)}>
                                        {isExpanded ? 'Show less' : 'Read more'}
                                    </button>
                                )}
                                <div className="portfolio__item-techstack">
                                    <ul>
                                        {project.techStack.map((tech: string, techIndex: React.Key) => (
                                            <li key={techIndex}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="portfolio__item-actions">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="portfolio__item-link">
                                        Visit Project
                                    </a>
                                    {hasVideos && (
                                        <button
                                            className="portfolio__item-link"
                                            onClick={() => openModal(project.knowMore)}>
                                            Watch Demo
                                        </button>
                                    )}
                                    {project?.knowMoreLink && (
                                        <button
                                            className="portfolio__item-link"
                                            onClick={() => window.open(project?.knowMoreLink, "_blank")}
                                        >
                                            Work Samples
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {isModalOpen && (
                <div className={`modal ${isModalOpen ? "open" : ""}`}>
                    <div className="modal__content">
                        <button className="modal__close" onClick={closeModal}>
                            &times;
                        </button>
                        {activeProject.length > 0 && (
                            <div className="modal__media">
                                {activeProject[activeIndex].endsWith(".mp4") ? (
                                    <video controls className="modal__media-item" src={activeProject[activeIndex]} />
                                ) : (
                                    <img className="modal__media-item" src={activeProject[activeIndex]} alt={`Project media ${activeIndex + 1}`} />
                                )}
                                {activeProject.length > 1 && (
                                    <>
                                        <button className="modal__prev" onClick={prevSlide}>
                                            &#10094;
                                        </button>
                                        <button className="modal__next" onClick={nextSlide}>
                                            &#10095;
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="modal__overlay" onClick={closeModal}></div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
