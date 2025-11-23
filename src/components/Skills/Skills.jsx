import React, { useEffect } from "react";
import "./Skills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import html from "../../assets/html_icon.png";
import css from "../../assets/css_icon.png";
import js from "../../assets/JS_icon.png";
import reactImg from "../../assets/react_icon.png";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React", icon: reactImg },
  ];

  // useEffect(() => {
  //   gsap.from(".skill-box", {
  //     y: 40,
  //     opacity: 0,
  //     duration: 0.8,
  //     stagger: 0.25,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: ".skills-wrapper",
  //       start: "top 85%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // }, []);

  return (
    <div className="skills-wrapper">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-horizontal">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-text">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
