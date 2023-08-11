'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import  './style.css';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className="header">
            <div className="logo">
                <p className="copyright">©</p>
                <div className="name">
                    <p className="codeBy">Code by</p>
                    <p className="amira">Amira</p>
                    <p className="allagui">Allagui</p>
                </div>
            </div>
            <div className="nav">
                <Magnetic>
                    <div className="el">
                         <Link 
                         href="/">Home
                        </Link>
                        <div className="indicator"></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className="el">
                         <Link 
                         href="/about">About
                        </Link>
                        <div className="indicator"></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className="el">
                         <Link 
                         href='/Email'>Contact
                        </Link>
                        <div className="indicator"></div>
                    </div>
                </Magnetic>
            </div>
        </div>
        <div ref={button} className="headerButtonContainer">
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`button`}>
                <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
