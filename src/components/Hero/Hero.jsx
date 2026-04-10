import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero relative bg-[#fff4e9] pt-36 pb-24 px-[10%] lg:px-[20%] mx-auto flex flex-col gap-14 md:gap-24'>
      <img src="src/assets/hero-bg-1.png" alt="hero-bg" className='hero-top-image'/>
      <img src="src/assets/hero-bg-2.png" alt="hero-bg" className='hero-bottom-image'/>
      
      <div className='mx-auto text-center z-10'>
          <h1 className='text-[40px] md:text-[66px] lg:text-[80px] xl:text-[88px] mb-3 md:mb-0 font-semibold  text-[#5a6a5d] leading-none'>R+ Counselling Space</h1>
          <img src="src/assets/hero-bg-3.png" alt="hero-bg" className='hidden md:block md:w-[50%] mx-auto'/>
          <p className='text-lg md:text-2xl text-[#55675b] leading-normal'>Professional Counselling for Adolescents & Adults</p>
      </div> 

      <div className='flex flex-col justify-between items-center gap-12 lg:gap-6 z-10'>
        <p className='text-[17px] md:text-[22px] lg:text-[26px] text-[#55675b] flex flex-col md:flex-row items-center md:gap-2'>
          <span><i className="fa-solid fa-laptop mr-2"></i>Online Sessions (Available Now) </span>
          <span className='hidden md:block'>|</span>
          <span><i className="fa-solid fa-location-dot mr-2"></i> Seremban (Coming Soon)</span>
        </p>

        <button className='text-2xl lg:text-3xl text-white bg-[#ee9c56] px-14 py-3 rounded-xl cursor-pointer hover:bg-[#f7ae6e] duration-200'>Book Now</button>  
      </div>
    </div>
  )
}

export default Hero