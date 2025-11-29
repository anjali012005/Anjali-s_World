import { useEffect, useRef } from "react";
import "./Experience.css";
import techno from '../../assets/techno.jpg'
import intern from '../../assets/intern.jpeg'
import intern1 from '../../assets/intern1.jpeg'

const Experience = () => {

    return (
        <div className="experience-section">
            <div className="experience-wrapper">
                <h1 className="experience-heading">
                    Experience
                </h1>
            </div>

            <div className="experience-cards">
                <div className="exp-card">
                    <h2>FullStack Web & App Developer Intern</h2>
                    <p>Technoscien Noida • Jan 2025 - Apr 2025</p>
                    <p>MERN Stack.</p>
                    <img src={intern1} alt="img" />
                </div>

                <div className="exp-card">
                    <h2>Full Stack Developer Intern</h2>
                    <p>Yashi IT Services • Nov 2024 - Dec 2024</p>
                    <p>Worked for clients. Used MERN, Python, NextJS.</p>
                    <img src={intern} alt="img" />
                </div>
            </div>

        </div>
    );
};

export default Experience;
