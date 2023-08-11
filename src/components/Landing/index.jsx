'use client'
import Image from 'next/image'
import  './style.css'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className="landing">
      {/* <div className='w-full flex justify-center '>
        
     <img
      src="/images/allagui2.png"
      alt="background"
  />
      </div> */}
         <Image 
        // src="./images/amira-background-3.png"
        src="./amira-background-3.png"
        // src="/images/background.jpg"
        fill={true}
        alt="background"
      />
      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>Software Engineer -</p>
          <p ref={secondText}>Software Engineer -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className="description">
      
      </div>
    </motion.main>
  )
}
