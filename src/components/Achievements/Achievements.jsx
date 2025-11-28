import React, { useState } from "react";
import "./Achievements.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const achievements = [
    {
      title: "TCS CodeVita Season 13 - Top 2% among 5 lakh+ Participants",
      img: "/tcs.png",
      desc: "Top 2% among 5 lakh+ Participants"
    },
    {
      title: "Dynamic Dilemma Hackathon — Ranked 5th among 50+ participants organized by UnsaidTalks",
      img: "/dp-winner.png",
      desc: "Ranked 5th among 50+ participants"
    },
    {
      title: "Naukri Campus Young Turks – 99.60% (Top 1% of 5 lakh+ participants)",
      img: "/young-turks25.png",
      desc: "Top 1% of 5 lakh+ participants"
    },
    {
      title: "Flipkart Runway Season 4",
      img: "/flip-run.png",
      desc: "Participated in Flipkart Runway Season 4 organized by Flipkart"
    },
    {
      title: "Adobe India Hackathon",
       img: "/adobe-hack.png",
      desc: "Participated in Adobe India Hackathon (Team Name: CodeStreakers) Adobe"
    },
  ];

  useGSAP(() => {
    gsap.utils.toArray(".ach-box").forEach((box) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });
    });
  });


  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ach-container">
      {achievements.map((item, index) => (
        <div key={index} className="ach-box">
          <div className="ach-header" onClick={() => toggle(index)}>
            <h3 className="ach-title">{item.title}</h3>
            <button className="toggle-btn">
              {openIndex === index ? "Hide" : "Show"}
            </button>
          </div>

          {openIndex === index && (
            <div className="ach-content">
              <img src={item.img} alt="achievement-img" />
              <p>{item.desc}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Achievements;
