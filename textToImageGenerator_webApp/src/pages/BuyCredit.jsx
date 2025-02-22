import React, { useRef } from 'react'
import { plans } from '../assets/assets'
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../atom/Atom';

export default function BuyCredit() {
  const cardRef = useRef([]);
  const card = cardRef.current;
  const user = useRecoilValue(userAtom);
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    for(let i=0; i<=cardRef.current.length; i++){
      gsap.to(cardRef.current[i], {
        transform: 'rotate(-10deg)',
    
        stagger:1.2,
        opacity:0.7,
        scrollTrigger:{
          trigger: '.container',
          // markers: true,
          scrub:1.2,
          start: 'top 20%',
          end: 'bottom 20%',
          duration:6,
        }
      })
    }
  })

  return (
    <div className='min-h-screen flex justify-center'>
      <div className='flex flex-col items-center gap-3'>
        <p className='uppercase border-2 rounded-full bg-white text-center text-sm px-6 py-2 txt-shadow '>Our Plans</p>
        <h1 className='text-[12vw] sm:text-5xl md:text-3xl mb-5 txt-shadow'>Choose the plan</h1>
        {/* ------------- CARDS ---------- */}
        <div className='container flex lg:flex-row flex-col items-center justify-center gap-6 origin-[100% 80%]'>
          {
            plans.map((elem,i)=>
            <div key={i} ref={el=>cardRef.current[i] = el}
            className='card flex flex-col items-center  bg-white shadow-xl
            border-[#ededed] border-2 h-[60vh] w-[90vw] sm:w-[50vw] lg:w-[25vw]
             rounded-xl  text-center'>
              
              <h1 className='pt-[10vh] text-3xl font-semibold txt-shadow'>{elem.id}</h1>
              <p className='text-xl sm:text-sm text-[#515151] py-3 txt-shadow'>{elem.desc}</p>
              <p className='pt-5 pb-3 text-[12vw] sm:text-2xl md:text-3xl font-semibold txt-shadow'>${elem.price}/
                  <span className='text-sm text-[#515151] txt-shadow'>{elem.credits} credits</span>
              </p>
                    {/* ----------- BUTTON -------- */}
              <button className='bg-black text-white rounded-lg 
              md:px-12 py-3 px-6 text-lg md:text-[1vw] mt-10 
              active:scale-105 transition-all duration-300 
              ease-in-out cursor-pointer shadow-[2px_2px_10px_3px_rgba(0,0,0,0.5)]'>
              {user?'Purchase': 'Get Started'}</button>
            </div>
            )
          }
        </div>
      </div>
    </div>
    
  )
}
