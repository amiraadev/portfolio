import  './style.css';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
// import ReactWhatsapp from 'react-whatsapp';


export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} ref={container} className="contact">
            <div className="body">
                <div className="title">
                    <span>
                        <div className="imageContainer">
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`./images/allagui4.png`}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{x}} className="buttonContainer">
                        <Rounded  backgroundColor={"#530000"} className="button">
                            <a href='/Email'>
                            <p>Get in touch</p>
                            </a>          
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className="nav">
                        <Rounded>
                        <a href='/Email'>
                            <p>allagui_amira@yahoo.com</p>
                        </a>  

                        </Rounded>
                        <Rounded>
                        <a href="https://wa.me/+21658226493?text=hello" target="_blank" rel="noopener noreferrer" >
                            <p>+216 50 698 639</p>
                        </a> 
                        </Rounded>
                </div>
               
                <div className="mobile-screen flex flex-row justify-between mt-8  md:hidden">
                        <div>
                                <span>
                                    <h3>Version</h3>
                                    <p>2023 © Edition</p>
                                </span>
                        </div>
                        <div>
                            <span>
                                <h3>socials</h3>
                                <a href='https://github.com/amirticha' target="_blank" rel="noopener noreferrer">
                                    <Magnetic>
                                        <p>Github</p>
                                    </Magnetic>
                                </a>
                            </span>
                            <a href='https://www.linkedin.com/in/allagui-amira/'  target="_blank" rel="noopener noreferrer">
                                    <Magnetic>
                                        <p>Linkedin</p>
                                    </Magnetic>
                                </a>                    
                        </div>
                </div>
                <div className="info">
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2023 © Edition</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <a href='https://github.com/amirticha' target="_blank" rel="noopener noreferrer">
                                <Magnetic>
                                    <p>Github</p>
                                </Magnetic>
                            </a>
                        </span>
                           <a href='https://www.linkedin.com/in/allagui-amira/'  target="_blank" rel="noopener noreferrer">
                                <Magnetic>
                                    <p>Linkedin</p>
                                </Magnetic>
                            </a>                    
                    </div>
                </div>

         
            </div>
        </motion.div>
    )
}
