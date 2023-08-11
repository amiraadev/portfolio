import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import  './style.css';
import Image from 'next/image';

const slider1 = [
    {
        color: "#4d5055",
        src: "projects/food-ordering-app.png",
        link:"https://amiraallagui.github.io/food-ordering-app/"
    },
    {
        color: "#4d5055",
        src: "projects/gym-app.png",
        link:"https://amiraallagui.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "funny.jpg",
        link:"https://amiraallagui.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "google.jpg",
        link:"https://amiraallagui.github.io/gym-app/"
    }
]

const slider2 = [
    {
        color: "#4d5055",
        src: "maven.jpg",
        link:"https://amiraallagui.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "panda.jpg",
        link:"https://amiraallagui.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "powell.jpg",
        link:"https://amiraallagui.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "wix.jpg",
        link:"https://amiraallagui.github.io/gym-app/"
    }
]

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    

    return (
        <div ref={container} className="slidingImages">
            <motion.div style={{x: x1}} className="slider">
                    {
                        slider1.map( (project, index) => {
                            const handleClick = () => {
                                window.location.href = project.link;
                              };
                            return <div className="project" style={{backgroundColor: project.color}} >
                                            <div key={index} className="imageContainer">
                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                    <Image 
                                                    fill={true}
                                                    alt={"image"}
                                                    src={`./images/${project.src}`}
                                                    // onClick={handleClick}
                                                    />
                                                </a>

                                            </div>
                                    </div>
                        })
                    }
                </motion.div>
                <motion.div style={{ x: x2 }} className="slider">
                    {slider2.map((project, index) => {
                        const handleClick = () => {
                        window.open(project.link, '_blank'); // Open link in a new tab
                        };
                        return (
                        <div className="project" style={{ backgroundColor: project.color }}>
                            <div key={index} className="imageContainer">
                            {/* Wrap the Image component with an anchor tag */}
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Image fill={true} alt={"image"} src={`./images/${project.src}`} />
                            </a>
                            </div>
                        </div>
                        );
                    })}
                </motion.div>
                <motion.div style={{height}} className="circleContainer">
                    <div className="circle"></div>
                </motion.div>
        </div>
    )
}
