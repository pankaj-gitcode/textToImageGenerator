import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil';
import { exitAtom, userAtom } from '../atom/Atom';

export default function GenerateBtn(){
    const navigate = useNavigate();
    const user = useRecoilValue(userAtom);
    const [exit, setExit] = useRecoilState(exitAtom);

        // button onClick to navigate /result || login page
    const onClickHandler = ()=>user? navigate('/result'):setExit(true)
   
    return(<>
        <div className='flex items-center justify-center py-12'>
            <div className='flex flex-col flex-wrap items-center justify-center'>
                
                <h1 className='text-3xl sm:text-3xl md:text-[5vw] lg:text-5xl pb-6 text-neutral-800'>See the magic. Try now</h1>

                    {/* ---------- BUTTON -------- */}
                <button onClick={onClickHandler}
                className='flex items-center justify-center 
                bg-black text-white px-10 py-3 rounded-full
                active:scale-105 duration-300 ease-in-out'>

                    <p className='text-xl sm:text-lg lg:text-sm'>Generate Images</p>
                    <img src={assets.star_group} alt={assets.star_group} 
                        className='w-6'
                    />
                </button>
            </div>
            
        </div>
        
        
    </>)
}