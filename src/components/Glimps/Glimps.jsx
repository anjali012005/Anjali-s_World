import './Glimps.css'

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import collage from '../../assets/collage.png'

const GlimpsCollage = () => {
  const collageRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(collageRef.current.children, {
  //     opacity: 0,
  //     y: 40,
  //     duration: 1,
  //     stagger: 0.2,
  //     ease: "power3.out",
  //   });
  // }, []);

  // useEffect(() => {
  //   const images = collageRef.current.querySelectorAll("img");
  //   let loadedCount = 0;

  //   images.forEach((img) => {
  //     img.onload = () => {
  //       loadedCount++;
  //       if (loadedCount === images.length) {
  //         gsap.from(collageRef.current.children, {
  //           opacity: 0,
  //           y: 40,
  //           duration: 1,
  //           stagger: 0.2,
  //           ease: "power3.out",
  //         });
  //       }
  //     };
  //   });
  // }, []);


  return (
    <div className="glimps-wrapper">
      <div className="collage">
        <img src={collage} className="box b1" alt="" />
      </div>

      <div className="right-content">
        <div className='right-side'>
          <div className='right-div'>
            <h1>How It All Started</h1>
            <p>
              A glimpse into my journey — from knowing nothing about tech to building things I never imagined. These moments represent growth, curiosity, and the steps that shaped who I am today.
            </p>
            <p className='second-parah'>
              Every picture you see here holds a story — late-night learning, countless errors, small wins, and breakthroughs that pushed me forward. This journey isn’t perfect, but it’s real, and it’s mine.
            </p>
          </div>
          <div className='right-div-button'>
            <button>Know My Work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlimpsCollage;
