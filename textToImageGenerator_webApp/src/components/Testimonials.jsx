import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

export default function Testimonials() {
  return (
    <div className='pb-10'>

            {/* ------------- TITLE ------------ */}
            <div className='flex flex-col items-center justify-center gap-2 pb-12'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center'>Customer testimonials</h1>
                <p className=' text-xl sm:text-xl text-center text-stone-500'>What Our Users Are Saying</p>
            </div>
            {/* ------------- CARD ------------ */}

            <div className='flex sm:flex-row flex-col items-center justify-center gap-3'>
                {
                    testimonialsData.map((elem,i)=>
                    <div key={i} className='flex flex-col items-center justify-center
                    border-2 border-[#E1E1E1] bg-white rounded-xl shadow-[0px_2px_20px_0px_rgba(0,0,0,0.2)]
                     px-2 text-center gap-1  h-[50vh] sm:w-[30vw] lg:w-[20vw]
                     cursor-pointer hover:scale-105 duration:300 transition ease-in-out '>

                        <img src={elem.image} alt={elem.image} />
                        <h1 className='text-xl font-semibold'>{elem.name}</h1>
                        <p className='text-sm text-stone-600'>{elem.role}</p>
                        
                        <div className='flex py-2'>
                            {
                                Array(elem.stars).fill().map((ele,i)=>
                                <img key={i} src={assets.rating_star} alt={assets.rating_star} /> )
                            }
                        </div>

                        <p className='sm:text-[2vw] md:text-[1.8vw] lg:text-[1vw] text-stone-700 leading-6'>
                        I&apos;ve been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                        </p>

                    </div>
                    )
                }
            </div>

    </div>
  )
}
