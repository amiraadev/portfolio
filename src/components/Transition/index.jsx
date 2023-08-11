import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import  './style.css';
import Image from 'next/image';
import { FaCode ,FaServer,FaDatabase,FaInfinity } from 'react-icons/fa';


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
        <h1 className='title md:mb-24 md:ml-24'>I can help you with ...</h1>
        
        <motion.div style={{x: x2}} className="slider">
            <div  className="w-full flex  flex-wrap md:flex-row md:flex-nowrap md:gap-10 md:mx-32"> 
            <div></div>
            <div></div>
            {/* frontend */}
                 <div  className="md:w-1/4 sm:1/2 p-4">
                    <FaCode className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='text-4xl text-left my-4 '>Frontend </h2>
                    <div className="text-box " >
                           <p>I build scalable websites from scratch that fit seamlessly with design.</p>
                           <p>My expertise lies in creating captivating micro animations, smooth transitions, and engaging interactions that bring websites to life.</p>
                    </div>
                 </div> 
            {/* Backend */}
                 <div  className="md:w-1/4 sm:1/2 p-4">
                    <FaServer className="icon"/> 
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='text-4xl text-left my-4 '>Backend </h2>
                    <div className="text-box ">
                           <p>Whether it&apos;s building RESTful services, integrating third-party APIs, or optimizing server response times, my focus remains on delivering a seamless user experience through my backend craftsmanship.</p>
                    </div>
                 </div> 
            {/* Database */}
                 <div  className="md:w-1/4 sm:1/2 p-4">
                    <FaDatabase className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='text-4xl text-left my-4 '>Database </h2>
                    <div className="text-box ">
                           <p>I meticulously organize data models to enhance data integrity and facilitate data retrieval, ensuring optimal performance even with large datasets.</p>
                    </div>
                 </div> 
            {/* DevOps */}
                 <div  className="md:w-1/4 sm:1/2 p-4">
                    <FaInfinity className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='text-4xl text-left my-4 '>DevOps </h2>
                    <div className="text-box ">
                      <p>As a DevOps practitioner, I focus on automating and integrating various stages of the development lifecycle, from continuous integration (CI) to continuous delivery (CD).</p>       
                    </div>
                 </div>
            </div>
                </motion.div>
                <motion.div style={{height}} className="circleContainer">
                    <div className="circle"></div>
                </motion.div>
        </div>
    )
}