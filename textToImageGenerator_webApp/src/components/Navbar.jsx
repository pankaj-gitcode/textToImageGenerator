import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import {useRecoilState, useRecoilValue } from 'recoil';
import { creditAtom, exitAtom, tokenAtom, userAtom } from '../atom/Atom';




export default function Navbar() {
  // const logoToHomeNav = useNavigate();
  // const navToBuy = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);
  const [exit, setExit] = useRecoilState(exitAtom);
  const [token,setToken] = useRecoilState(tokenAtom);
  
  const credit = useRecoilValue(creditAtom);
  
  const navigate = useNavigate();

   console.log("navbar_userName: ",user)
   // ----- LOGOUT HANDLER -----
    const logoutHandler = ()=>{
        // remove current token,setToken to empty and user:null
      localStorage.removeItem('token');
      setToken('');
      setUser(null);
      navigate('/')
    }


  return (
    <div id='navbar'>
       
      <nav className='flex items-center justify-between p-5'>
            {/* --------- LOGO ---------- */}
        <img src={assets.logo}
         alt="text to image"
          onClick={()=>navigate('/')}
            className='cursor-pointer w-28 sm:w-32 lg:w-40'
          />
          {
            user? 
              // ---------------------- USER LOGGED-IN ----------------------------
            <div className='flex items-center justify-center gap-8'>
                              {/* ------- CREDITS ------- */}
              <div onClick={()=>navigate('/buy')} className='bg-[#D7EBFF] flex items-center justify-center gap-2 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition duration-[.5s] cursor-pointer '>
                <img src={assets.credit_star} alt={assets.credit_star} className='w-5' />
                <p className='text-[15px] text-[#4A4A4A] text-xs sm:text-sm font-medium'>Credit left: <span>{credit}</span></p>
              </div>
                                {/* ------- USER NAME ------ */}
                <h1 className=' max-sm:hidden pl-4'>Hi! {user}</h1>

              <div className='group relative '>
                <img src={assets.profile_icon} alt={assets.profile_icon} className='w-10 drop-shadow-[2px_1px_8px_rgba(0,0,0,0.3)]' />
                                  {/* --------- LOGOUT BLOCK -------- */}
                <div className='absolute z-10 pt-12 rounded top-0 right-0 hidden group-hover:block  cursor-pointer'>
                  <ul className='list-none bg-white border rounded-md p-2 m-0 text-sm'>
                    <li onClick={()=>logoutHandler()}>Logout</li>
                  </ul>
                </div>

                
              </div>
            </div>  
            :
              // ---------------------- USER LOGGED-OUT -------------------------------
            <div className='flex items-center gap-10 text-[#545454] font-[400]'>

                {/* ------- PRICING ------- */}
                <p className='cursor-pointer' onClick={()=>navigate('/buy')}>Pricing</p>
                    {/* -------- LOGIN -------- */}
                <button onClick={()=>setExit(true)}
                className='bg-zinc-800 px-7 sm:px-10 py-2 text-white rounded-full text-small'>Login</button>
            </div> 
          }
      </nav>
    </div>
  )
}
