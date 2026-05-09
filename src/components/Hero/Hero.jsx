import './Hero.css';
import { motion } from "framer-motion";
import hero1 from '../../assets/hero-bg-1.png';
import hero2 from '../../assets/hero-bg-2.png';
import hero3 from '../../assets/hero-bg-3.png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div id="hero" className='hero relative bg-[#fff4e9] pt-36 pb-24 px-[5%] sm:px-[10%] lg:px-[15%]  mx-auto flex flex-col gap-14 md:gap-24'>
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
              R+ Counselling
          </motion.h1>
          
          <img src={hero3} alt="hero-bg" className='hidden md:block md:w-[50%] mx-auto'/>
          <p className='text-lg md:text-2xl text-[#55675b] leading-normal'>
            {t('hero_subtitle')}
          </p>
      </div> 

      <div className='flex flex-col justify-between items-center gap-12 lg:gap-6 z-10'>
        <p className='max-[320px]:text-lg text-xl md:text-[22px] lg:text-[26px] text-[#55675b] flex flex-col md:flex-row items-center gap-4 md:gap-2'>
          <span><i className="fa-solid fa-laptop mr-2"></i>{t('hero_online')}</span>
          <span className='hidden md:block'>|</span>
          <span><i className="fa-solid fa-location-dot mr-2"></i>{t('hero_offline')}</span>
        </p>
<a
  href="#booking"
  className="
    inline-block
    px-12 py-4
    text-2xl lg:text-3xl
    font-bold
    text-white

    bg-linear-to-r
    from-[#ffb676]
    to-[#ff8c42]

    rounded-full

    shadow-[0_10px_30px_rgba(255,140,66,0.45)]

    transition-all duration-300

    hover:scale-105
    hover:shadow-[0_15px_40px_rgba(255,140,66,0.6)]
    hover:-translate-y-1

    active:scale-95
  "
>
  {t('hero_book_now')}
</a>
      </div>
    </div>
  )
}

export default Hero