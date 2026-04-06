import React from "react"
import "./hobbies.scss";
import Hiking from "../../assests/hiking.jpg";
import Climbing from "../../assests/climbing3.jpg";
import Reading from "../../assests/reading.jpg";
import Travelling from "../../assests/travelling.jpg";
import { useInView } from "react-intersection-observer";

const hobbies = [
    { label: "Hiking", img: Hiking },
    { label: "Climbing", img: Climbing },
    { label: "Reading", img: Reading },
    { label: "Travelling", img: Travelling },
];

const Hobbies = () => {
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

    return (
        <div className="hobbies">
            <div className="hobbies__title" ref={ref}>
                Hobbies
            </div>
            <div className={`hobbies__list${inView ? ' hobbies__list--visible' : ''}`}>
                {hobbies.map(({ label, img }) => (
                    <div key={label} className="hobbies__list__box">
                        <img src={img} alt={label} />
                        <div className="hobbies__list__box__overlay">
                            <span>{label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hobbies;
