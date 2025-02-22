import React, { useRef, useState } from 'react'
import { assets, stepsData } from '../assets/assets'
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';

export default function WorkFlow() {
    const [pos, setPos] = useState({x:0, y:0});
    const workFlowRef = useRef();
    const imgRef = useRef([]);
    const stepDivRef = useRef([]);

    // ---------- WOKFLOW ANIMATION -----
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        const workFlow = workFlowRef.current;

        // animate each div showing steps
        workFlow.childNodes.forEach((elem,i)=>{
            const direction = i%2 === 0? 20: -20; //filtered x direction as per odd & even
            gsap.fromTo(elem,{
                x: direction,opacity:0
            },{
                x:0,opacity:1,duration:1, scrollTrigger:{
                    trigger:elem, markers:false,
                    start:'top 80%', end:'bottom 20%',
                     scrub:1,
                }
            })
        })

    })

    // Image with text mouse movement
    // const workFlow = workFlowRef.current; 

    const mouseMove = (e,i)=>{
        const xCord = e.clientX; const yCord = e.clientY;
        setPos(pos=>({...pos,x:xCord, y:yCord}))

        // console.log("POS=>", pos)
        
        stepDivRef.current[i].childNodes[1].style.opacity = 1
        
        stepDivRef.current[i].childNodes[1].style.left = `${pos.x/2}px`
        
    }
    const mouseLeave = (i)=>{
        stepDivRef.current[i].childNodes[1].style.opacity = 0;
    }

  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-5'>
                {/* --------- TITLE ---------- */}
        <div className='flex flex-col items-center justify-center pb-10'>
            <h1 className='text-xl sm:text-3xl lg:text-5xl'>How it works</h1>
            <p className='text-xs sm:text-sm text-gray-500'>Transform Words Into Stunning Images</p>
        </div>

        <div ref={workFlowRef} className='workFlow flex flex-col justify-center gap-5'>
            {
                stepsData.map((elem,i)=>
                <div key={i} className='bg-white flex sm:flex-row gap-2 sm:pl-2 sm:pr-20 
                 w-[50vw] sm:w-[76vw] lg:w-[50vw] py-8 shadow-lg rounded-lg border-[#E1E1E1] border-[1px]
                 flex-col items-center justify-center cursor-pointer relative 
                 '
                 ref={el=>stepDivRef.current[i] = el}
                 onMouseMove={(e)=>mouseMove(e,i)} onMouseLeave={()=>mouseLeave(i)}
                 >

                        {/* --------- IMAGE ------- */}
                    <img src={elem.icon} alt={elem.icon} className='ml-2 sm:pl-0 '/>
                    <img src={elem.image} alt={elem.image} ref={imgRef} className='absolute  h-[50vh]  left-0 top-0 opacity-0
                     mix-blend-none'/>

                            {/* ------- DESCRIPTION ----- */}
                    <div className='flex flex-col items-center sm:items-start '>
                        <h1 className='text-10 sm:text-xl'>{elem.title}</h1>
                        <p className='text-sm text-gray-500 text-center sm:text-start'><q>{elem.description}</q></p>
                    </div>
                </div>
                )
            }
        </div>

    </div>
  )
}
