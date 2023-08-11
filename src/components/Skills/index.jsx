import  './style.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
// import { slideUp, opacity } from './animation';
import { FaCode ,FaServer,FaDatabase,FaInfinity } from 'react-icons/fa';

import Rounded from '../../common/RoundedButton';
import Image from 'next/image';
export default function index() {

    const description = useRef(null);

    return (
        <div  ref={description} className="skill-description">
            
        <div className=' h-full w-full '>
        <motion.div 
                className="flex flex-col md:gap-14 p-5 md:p-20"        
           >
           <h1 className=' text-left  md:text-6xl md:pr-14'>Fostering digital excellence: Nurturing growth in the digital realm</h1>
           <hr className=" border-t-1 border-gray-700 my-4 "/>
             <motion.div  
                 className="w-full flex  flex-wrap md:flex-row md:flex-nowrap md:gap-10 md:p-20"
                 initial="hidden"
                 whileInView='visible'
                 viewport={{once:true,amount:0.2}}
                 transition={{delay:0.2,duration:0.5}}
                 variants={{
                     hidden:{opacity:0,y: 80},
                     visible:{opacity:1,y: 0},
                 }}
                 > 
                <div  className="flex-1 md:p-16  my-4"> 
                With each project, I push my work to new horizons, always putting quality first.
                As a software engineer, I'm committed to constant growth and delivering excellence to drive impactful outcomes.
                </div>
                <motion.div  
                    className="flex " 
                    > 
                    <Image 
                        src="./images/allagui5.jpg"
                        width={"800"}
                        height={"600"}
                        data-scroll data-scroll-speed="0.3"
                        objectFit= {"cover"}
                        //  fill={true}
                        alt="background"
                    />
                </motion.div>
             </motion.div>
           
        </motion.div>
    </div>
        </div>
    )
}
