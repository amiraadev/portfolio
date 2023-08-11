'use client';
import React from 'react'
import  './style.css';
import Image from 'next/image';


export default function index({index, title,image,color, manageModal}) {

    return (
        
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className="project">
            <h2>{title}</h2>
            <p >Software Engineer</p>
            <div  className='md:hidden'>
                        <div className="md:hidden modal my-10" style={{backgroundColor: color}} key={`modal_${index}`}>
                            
                                <Image 
                                src={`./images/${image}`}
                                width={300}
                                height={0}
                                alt="image"
                                />
                    </div>
            </div>
        </div>
    )
}
