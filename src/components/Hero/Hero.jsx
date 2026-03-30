import React from 'react'

const Hero = () => {
  return (
    <div className='relative bg-[#fff4e9] pt-36 pb-24 px-[10%] lg:px-[20%] mx-auto flex flex-col gap-14 md:gap-24'>
      <img src="src/assets/hero-bg-1.png" alt="hero-bg" className='absolute w-[33%] -top-18 left-4 lg:w-[20%] lg:-top-18 lg:left-[20%]'/>
      <img src="src/assets/hero-bg-2.png" alt="hero-bg" className='w-[15%] absolute bottom-0 right-[20%]'/>
      

      <div className='mx-auto text-center z-10'>
          <h1 className='text-[40px] font-semibold md:text-[66px] lg:text-[88px] text-[#5a6a5d] leading-none'>R+ Counselling Space</h1>
          <img src="src/assets/hero-bg-3.png" alt="hero-bg" className='hidden lg:w-[50%] mx-auto'/>
          <p className='text-lg md:text-2xl text-[#55675b] leading-normal'>Professional Counselling for Adolescents & Adults</p>
      </div> 

      <div className='flex flex-col justify-between items-center gap-12 lg:gap-6 z-10'>
        <p className='text-lg md:text-[22px] lg:text-[26px] text-[#55675b] flex flex-col md:flex-row items-center md:gap-2'>
          <span><i className="fa-solid fa-laptop mr-2"></i>Online Sessions Available </span>
          <span className='hidden md:block'>|</span>
          <span><i className="fa-solid fa-location-dot mr-2"></i> Seremban (Coming Soon)</span>
        </p>

        <button className='text-2xl lg:text-3xl text-white bg-[#ee9c56] px-14 py-3 rounded-xl cursor-pointer hover:bg-[#f7ae6e] duration-200'>Book Now</button>  
      </div>
    </div>
  )
}

export default Hero