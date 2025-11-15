import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import user_img from '../../assets/anjali-portfolio-img.png';
import './Home.css';

const Home = () => {
    const movingDivRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useGSAP(() => {
        const textWidth = text1Ref.current.offsetWidth;

        // Place text 2 exactly after text 1
        gsap.set(text2Ref.current, { x: textWidth });

        gsap.to([text1Ref.current, text2Ref.current], {
            x: `-=${textWidth}`,   // slide left continuously
            duration: 10,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: (value) => {
                    const v = parseFloat(value);
                    return (v % textWidth) + "px";   // PERFECT LOOPING
                }
            }
        });
    });

    return (
        <div className="hero-section">
            <div className="hero-img-div">
                <img src={user_img} className="user-img" />

                <div className="moving-txt-div" ref={movingDivRef}>
                    <h2 className="moving-text" ref={text1Ref}>Hi, My Name Is Anjali Daharwal</h2>
                    <h2 className="moving-text" ref={text2Ref}>Hi, My Name Is Anjali Daharwal</h2>
                </div>
            </div>

            <div className="hero-heading-div">
                <h2>Bringing <br /> Ideas To <br /> Life</h2>
            </div>
        </div>
    );
};

export default Home;
