import './Footer.css'
import logo from '../../assets/logo.png';
import rednote from '../../assets/rednote.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className='bg-[#55675b] pt-20 pb-8 px-[6%] lg:px-[5%] flex flex-col gap-20 sm:gap-14'>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center">
            <div className="flex items-center flex-col sm:flex-row gap-5 md:gap-10">
                <img className="w-[40%] sm:w-[30%] md:w-[22%]" src={logo} alt="logo" />
                <div className="flex flex-col gap-4">
                    <div className="text-3xl sm:text-4xl text-white">RT Possibilities</div>
                    <div className="footer-social text-3xl text-white flex items-center gap-10">
                        <a href="https://wa.me/601129980528" target="_blank">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        
                        <a href="https://www.instagram.com/rplus.counselling/" target='_blank'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        {/* <a href="https://www.xiaohongshu.com/user/profile/USER_ID" target='_blank' className="border-2 p-1 rounded-sm">
                            <img className="w-4.5" src={rednote} alt="rednote" />
                        </a>  */}
                        
                    </div>
                </div>
            </div>

            <div className="footer_nav">
                <div>
                    <h4 className="font-bold text-xl border-b mb-3">{t('footer_explore')}</h4>
                    <ul className="footer-links">
                        <li><a href="#hero">{t('nav_home')}</a></li>
                        <li><a href="#about">{t('nav_aboutR')}</a></li>
                        <li><a href="#services">{t('nav_services')}</a></li>
                        <li><a href="#practitioner">{t('nav_practitioner')}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-xl border-b mb-3">{t('footer_session')}</h4>
                    <ul className="footer-links">
                        <li><a href="#session">{t('nav_session')}</a></li>
                        <li><a href="#booking">{t('book_title')}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="text-white text-center pt-3 border-t">
            <div>
               © 2026 RT Possibilities. All Rights Reserved. 
            </div>
            <div>
                RT POSSIBILITIES ENTERPRISE | Registration No: 202503146018
            </div>
        </div>
    </footer>
  )
}

export default Footer