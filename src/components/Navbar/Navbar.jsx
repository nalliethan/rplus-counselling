import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/navbar_logo.png'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
const [isScrolled, setIsScrolled] = useState(false);
const [activeSection, setActiveSection] = useState('hero');
const [menuOpen, setMenuOpen] = useState(false);

const menuRef = useRef(null);

const { t, i18n } = useTranslation();
const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the menu is open AND the click was OUTSIDE the menuRef element
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup the listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    // Handle Shadow logic
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    // Handle Active Link logic
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Triggers when section is in the middle of screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Target all sections that have an ID
    const sections = document.querySelectorAll('div[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
   <nav className={` flex items-center justify-between bg-[#fffcfc] text-[#c4a183] px-[2%] xl:px-[5%] py-3 sticky z-20 top-0 duration-300 ${isScrolled ? 'shadow-2xl' : 'shadow-none'}`}>
        <a href='#hero' className="relative text-xl flex items-center gap-4">
            <img className='w-10' src={logo} alt="logo" />
            R+ Counselling</a>

        <ul className='navbar-links'>
            <li className={activeSection === 'hero' ? 'active' : ''}>
              <a href="#hero">
                {t('nav_home')}
              </a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about">
                {t('nav_aboutR')}
              </a>
            </li>
            <li className={activeSection === 'services' ? 'active' : ''}>
              <a href="#services">
                {t('nav_services')}
              </a>
            </li>
            <li className={activeSection === 'practitioner' ? 'active' : ''}>
              <a href="#practitioner">
                {t('nav_practitioner')}
              </a>
            </li>
            <li className={activeSection === 'session' ? 'active' : ''}>
              <a href="#session">
                {t('nav_session')}
              </a>
            </li>
            <a className='action-btn' href="#booking">
              {t('hero_book_now')}
            </a>

            <button 
              onClick={toggleLanguage}
              className="px-4 py-2 bg-red-400 text-white rounded-full cursor-pointer hover:bg-red-300 transition"
            >
              {i18n.language === 'en' ? '中' : 'EN'}
            </button>
        </ul>

        <div className='mobile-navbar' ref={menuRef}>
            

          <div className='flex gap-3'>
           <button 
                    onClick={toggleLanguage}
                    className="px-4 py-2 bg-red-400 text-white rounded-full cursor-pointer hover:bg-red-300 transition"
            >
              {i18n.language === 'en' ? '中' : 'EN'}
            </button>
            <div className='min-w-12 h-10 flex items-center justify-center' onClick={toggleMenu}>
                <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>
          </div>
            
          <div className={`mobile-menu absolute w-60 h-fit py-10 px-6 top-18 right-3.5 rounded-3xl shadow-2xl bg-white z-20 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
              <ul className='flex flex-col gap-6 text-[16px]' onClick={() => setMenuOpen(false)}>
                  <li className={activeSection === 'hero' ? 'active' : ''}><a className='block' href="#hero">{t('nav_home')}</a></li>
                  <li className={activeSection === 'about' ? 'active' : ''}><a className='block' href="#about">{t('nav_aboutR')}</a></li>
                  <li className={activeSection === 'services' ? 'active' : ''}><a className='block' href="#services">{t('nav_services')}</a></li>
                  <li className={activeSection === 'practitioner' ? 'active' : ''}><a className='block' href="#practitioner">{t('nav_practitioner')}</a></li>
                  <li className={activeSection === 'session' ? 'active' : ''}><a className='block' href="#session">{t('nav_session')}</a></li>
                  <a className='action-btn' href="#booking">{t('hero_book_now')}</a>
                 
              </ul>
          </div>
        </div>
   </nav>
  )
}

export default Navbar