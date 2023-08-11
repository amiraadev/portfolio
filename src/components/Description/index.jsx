import  './style.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "With a robust background as a former software engineer in the military, I bring a wealth of technical expertise, disciplined work ethic, and a proven track record of delivering mission-critical solutions. From front-end development to seamless back-end integration, my dedication lies in crafting secure and indispensable applications tailored to meet specific and vital requirements.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className="description">
            <div className="body flex-col md:flex-row">
    
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span className="mask"><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The fusion of my unwavering passion for design, coding, and interaction places me in a unique and dynamic position within the industry.</motion.p>
                <div className='mt-20 md:mt-80' data-scroll data-scroll-speed={0.1}>
                    <Rounded className="button">
                        <a href="/About">
                           <p>About me</p>
                        </a>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
