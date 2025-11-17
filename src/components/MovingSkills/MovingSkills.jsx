import { useEffect, useRef } from "react";
import gsap from "gsap";
import star from '../../assets/star-icon.png';
import ScrollTrigger from "gsap/ScrollTrigger";
import "./MovingSkills.css";

gsap.registerPlugin(ScrollTrigger);

export default function MovingSkills() {
  const wrapper = useRef(null);

  useEffect(() => {
    const track = wrapper.current;

    // Step 1 → Clone the items EXACTLY once
    const items = Array.from(track.children);
    items.forEach((item) => track.appendChild(item.cloneNode(true)));

    // Step 2 → Calculate total width of original set only
    const originalWidth = items.reduce(
      (total, el) => total + el.offsetWidth + 80, // 80 = gap
      0
    );

    let speed = 1;
    let tween;

    // Step 3 → Create infinite loop tween
    const createTween = () => {
      if (tween) tween.kill();

      tween = gsap.to(track, {
        x: -originalWidth * speed,
        duration: 14,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            let v = parseFloat(x) % -originalWidth;
            return `${v}px`;
          }
        }
      });
    };

    createTween();

    // Step 4 → Reverse on scroll
    let last = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > last && speed !== 1) {
        speed = 1;
        createTween();
      } else if (current < last && speed !== -1) {
        speed = -1;
        createTween();
      }

      last = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="move-skills-container">
      {/* <div className="marquee-track" ref={wrapper}>
        <img src={star} /><span>FRONT-END DEVELOPER</span>
        <img src={star} /><span>BACK-END DEVELOPER</span>
        <img src={star} /><span>FULL-STACK DEVELOPER</span>
        <img src={star} /><span>DEVOPS ENGINEER</span>
      </div> */}
      <div className="marquee-track" ref={wrapper}>
        <div className="item">
          <img src={star} alt="" />
          <span>FRONT-END DEVELOPER</span>
        </div>

        <div className="item">
          <img src={star} alt="" />
          <span>BACK-END DEVELOPER</span>
        </div>

        <div className="item">
          <img src={star} alt="" />
          <span>FULL-STACK DEVELOPER</span>
        </div>

        <div className="item">
          <img src={star} alt="" />
          <span>DEVOPS ENGINEER</span>
        </div>
      </div>

    </div>
  );
}
