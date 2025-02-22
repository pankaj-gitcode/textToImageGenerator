import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import gsap from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const homeNav = useNavigate();
    const logoRef = useRef();
    useGSAP(()=>{
        gsap.fromTo('.starGrp',{
            x:-30, ease:'bounce.inOut',
        },{x:logoRef.current.getBoundingClientRect().width-20,
            y:20 ,repeat:-1, yoyoEase:true, duration:5, rotate:360,})
    })
  return (
    <div className='py-10'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3'>

          <div className='flex items-center justify-between gap-6'>
           <div ref={logoRef} className='relative'>
            <img src={assets.logo} onClick={()=>homeNav('/')} alt={assets.logo_icon} width={150} className='drop-shadow-[3px_1px_1px_rgba(0,0,0,0.5)] cursor-pointer' />
            <img src={assets.star_group} alt={assets.star_group} width='32' className='
              starGrp absolute top-0 left-0 drop-shadow-[3px_3px_1px_rgba(0,0,0,0.8)] mix-blend-difference'/>
           </div>
            {/* <hr className='h-6 border border-gray-300'/> */}
            <p className='text-xs sm:text-sm border-l-2 border-[#9D9D9D] pl-3'>All right reserved. Copyright &copy;imagify  </p>
          </div>

            <div className='flex items-center justify-center gap-1'>
                <img src={assets.facebook_icon} alt='https://facebook.com'  width={35} className='cursor-pointer hover:scale-105 duration-300 ease-in-out' />
                <img src={assets.twitter_icon} alt='https://twitter.com' width={35} className='cursor-pointer hover:scale-105 duration-300 ease-in-out' />
                <img src={assets.instagram_icon} alt='https://instagram.com' width={35} className='cursor-pointer hover:scale-105 duration-300 ease-in-out' />
            </div>
        </div>
    </div>
  )
}
