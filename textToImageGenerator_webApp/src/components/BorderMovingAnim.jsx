// TODO: to create border moving around the button continuously

import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react'
// import '../App.css'

export default function BorderMovingAnim() {
    const divRef = useRef();

    useGSAP(()=>{
        gsap.to(divRef.current, {
            '--angle': `${72000}deg`,
            
            repeat: -1,
            ease: 'linear',
            yoyoEase: true,
            duration:500
        })
    })
  return (
    <div className="container h-screen flex items-center justify-center ">
        <div ref={divRef} className="wrapper bg-slate-950 text-slate-300 ">
            <div className="content flex items-center justify-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
            </div>
        </div>
    </div>

  )
}
