import React from "react"
import "./hobbies.scss";
import Hiking from "../../assests/hiking.jpg";
import Climbing from "../../assests/climbing3.jpg";
import Reading from "../../assests/reading.jpg";
import Travelling from "../../assests/travelling.jpg";
import { useInView, InView } from "react-intersection-observer";

const Hobbies = () => {
    const { ref } = useInView({
        threshold: 0,
        triggerOnce: true
    });

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
        <div className="hobbies">
            <div className="hobbies__title" ref={ref}>
                Like to do
            </div>
            <Component>

                <div className="hobbies__list">
                    <div className="hobbies__list__box">
                        <div className="hobbies__list__box__title">
                            Hiking
                        </div>
                        <div>
                            <img src={Hiking} />
                        </div>
                    </div>
                    <div className="hobbies__list__box">
                        <div className="hobbies__list__box__title">
                            Climbing
                        </div>
                        <div>
                            <img src={Climbing} />
                        </div>
                    </div>
                    <div className="hobbies__list__box">
                        <div className="hobbies__list__box__title">Reading</div>
                        <div>
                            <img src={Reading} />
                        </div>
                    </div>
                    <div className="hobbies__list__box">
                        <div className="hobbies__list__box__title">
                            Travelling
                        </div>
                        <div>
                            <img src={Travelling} />
                        </div>
                    </div>
                </div>
            </Component>
        </div>
    )
}
export default Hobbies;