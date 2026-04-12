import './Hero.css';
import { motion } from "framer-motion";
import hero1 from '../../assets/hero-bg-1.png';
import hero2 from '../../assets/hero-bg-2.png';
import hero3 from '../../assets/hero-bg-3.png';


const Hero = () => {
  return (
    <div id="hero" className='hero relative bg-[#fff4e9] pt-36 pb-24 px-[5%] sm:px-[10%] lg:px-[20%] mx-auto flex flex-col gap-14 md:gap-24'>
      <motion.img
        src={hero1}
        alt="hero-bg"
        className="hero-top-image"
        initial={{ rotate: -10 }}
        animate={{ rotate: 10 }}
        style={{ originY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <img src={hero2} alt="hero-bg" className='hero-bottom-image'/>
      
      <div className='mx-auto text-center z-10'>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className='text-4xl sm:text-[40px] md:text-[66px] lg:text-[80px] xl:text-[88px] mb-3 md:mb-0 font-semibold  text-[#5a6a5d] leading-none'>
              R+ Counselling Space
          </motion.h1>
          
          <img src={hero3} alt="hero-bg" className='hidden md:block md:w-[50%] mx-auto'/>
          <p className='max-[375px]:px-10 text-lg md:text-2xl text-[#55675b] leading-normal'>Professional Counselling for Adolescents & Adults</p>
      </div> 

      <div className='flex flex-col justify-between items-center gap-12 lg:gap-6 z-10'>
        <p className='max-[320px]:text-lg text-xl md:text-[22px] lg:text-[26px] text-[#55675b] flex flex-col md:flex-row items-center md:gap-2'>
          <span><i className="fa-solid fa-laptop mr-2"></i>Online Sessions (Available Now) </span>
          <span className='hidden md:block'>|</span>
          <span><i className="fa-solid fa-location-dot mr-2"></i> Seremban (Coming Soon)</span>
        </p>

        <a href='#booking' className='text-2xl lg:text-3xl text-white bg-[#ee9c56] px-14 py-3 rounded-xl cursor-pointer hover:bg-[#f7ae6e] hover:scale-105 duration-200'>Book Now</a>  
      </div>
    </div>
  )
}

export default Hero