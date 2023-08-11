"use client"
import React, { useRef, useState,useEffect} from 'react';
import emailjs from '@emailjs/browser';
import PrePage from '../../components/PrePage';
import { AnimatePresence } from 'framer-motion';

import "./style.css"

export default function index(){

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

  const form = useRef();
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ow2tgpc', 'template_7cnckpx', form.current, '0RyfDRxda55zTmthL')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");

          setName('')
          setEmail('')
          setMessage('')
 
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
     <AnimatePresence mode='wait'>
        {isLoading && <PrePage page="Contact" />}
    </AnimatePresence>
    <div className="form-container">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Message</label>
          <textarea name="textarea" rows="10" cols="50" required value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
    </>
   
  );
};