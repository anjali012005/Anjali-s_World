import React from 'react'
import './Education.css'
import box from '../../assets/box-img.png'
import Card from '../Card/Card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Education = () => {
    useGSAP(() => {
        gsap.from(".edu-left-side", {
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

    useGSAP(() => {
        gsap.from(".box-img", {
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
        <div className='edu-container'>
            <div className='edu-left-side'>
                <h2>My Qualification</h2>
                <Card/>
            </div>
            <div className='edu-right-side'>
                <img src={box} alt="box-img" className='box-img' />
                <p className="img-text">Bachelor's In Engineering</p>    
            </div>
        </div>
    )
}

export default Education
