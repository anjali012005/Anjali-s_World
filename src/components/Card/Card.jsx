import { useGSAP } from '@gsap/react'
import './Card.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Card = () => {
    
    useGSAP(() => {
        gsap.from(".card", {
            scrollTrigger: {
                trigger: ".card-container",
                start: "top 80%", // jab view me aaye
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.25,
        });
    });
    return (
        <div className='card-container'>
            <div className='card'><h3>Bachelor's in Engineering&nbsp;&nbsp;&nbsp;2022-26</h3></div>
            <div className='card'><h3>High School - 95.5%</h3></div>
        </div>
    )
}

export default Card
