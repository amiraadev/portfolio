"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import PrePage from '../../components/PrePage';
import Skills from '../../components/Skills';
import Transition from '../../components/Transition';
import Contact from '../../components/Contact';

function page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 500)
      }
    )()
  }, [])

  return (
    <main >
        <AnimatePresence >
          {isLoading && <PrePage page="About" />}
        </AnimatePresence>
        <Skills />
        <Transition /> 
        <Contact /> 
    
    </main>
  )
}

export default page
