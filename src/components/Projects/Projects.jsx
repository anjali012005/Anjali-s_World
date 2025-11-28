import './Projects.css'
import apple from '../../assets/apple-ui.mp4'
import brainwave from '../../assets/brainwave-ui.mp4'
import oldportfolio from '../../assets/portfolio-old-ui.mp4'
import timetable from '../../assets/timetable-ui.mp4'
import amazon from '../../assets/amazon-ui.mp4'
import todo from '../../assets/todo-ui.mp4'
import weatherfirst from '../../assets/weatherfirst-ui.mp4'
import quiGenie from '../../assets/quiGenie-ui.mp4'
import DynamicQuote from '../../assets/quote-ui.mp4'
import Simon from '../../assets/simon-ui.mp4'
import Abdul_Kalam from '../../assets/abdul-kalam-ui.mp4'
import { useEffect, useRef, useState } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const videoRefs = useRef([])
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        videoRefs.current.forEach((video) => {
            if (!video) return

            ScrollTrigger.create({
                trigger: video,
                start: "top 90%",
                onEnter: () => {
                    video.play()
                }
            })
        })
    }, [])

    const pro = [
        {
            name: "Apple_UI",
            projectVideo: apple,
            projectDesc: "",
            projectLink: "",
        },
        {
            name: "Brainwave",
            projectVideo: brainwave,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/UI_PROJECT",
        },
        {
            name: "QuiGenie",
            projectVideo: quiGenie,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/QuiGenie",
        },
         {
            name: "PrevPortfolio",
            projectVideo: oldportfolio,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/ANJALI_PORTFOLIO",
        },
        {
            name: "Amazon",
            projectVideo: amazon,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/Amazon-Clone",
        },
        {
            name: "Do_It",
            projectVideo: todo,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/TODO",
        },
        {
            name: "WeatherFirst",
            projectVideo: weatherfirst,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/Weather-Application",
        },
        {
            name: "DynamicQuote",
            projectVideo: DynamicQuote,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/DynamicQuote-Generator",
        },
        {
            name: "Simon_Says-Game",
            projectVideo: Simon,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/Simon_Says-Game",
        },
        {
            name: "APJ-kalam-s-Blog",
            projectVideo: Abdul_Kalam,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/APJ-kalam-s-Blog",
        },
        {
            name: "Time_Table",
            projectVideo: timetable,
            projectDesc: "",
            projectLink: "https://github.com/anjali012005/TimeTable.01",
        },
    ]

    return (
        <div id="project" className={`projects-container ${hovering ? "hover-active" : ""}`}>
            <h2 className="title">Projects</h2>

            <div className="projects-grid">
                {pro.map((p, index) => (
                    <div key={index} className="project-card"
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}>

                        <div className="project-video">
                            {p.projectVideo ? (
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    src={p.projectVideo}
                                    muted
                                    loop
                                    className="video-element"
                                />
                            ) : (
                                <div className="img-placeholder">No Video</div>
                            )}
                        </div>

                        <h3 className="project-name">{p.name}</h3>
                        <p className="project-desc">{p.projectDesc}</p>

                        <button href={p.projectLink}
                            onClick={() => window.open(p.projectLink, "_blank")} className="project-btn">View Project
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
