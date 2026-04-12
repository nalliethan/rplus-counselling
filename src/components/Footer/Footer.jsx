import './Footer.css'
import logo from '../../assets/logo.png';
import rednote from '../../assets/rednote.png';

const Footer = () => {
  return (
    <footer className='bg-[#55675b] pt-20 pb-8 px-[10%] lg:px-[5%] flex flex-col gap-20 sm:gap-14'>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center">
            <div className="flex items-center flex-col sm:flex-row gap-5 md:gap-10">
                <img className="w-[40%] sm:w-[30%] md:w-[22%]" src={logo} alt="logo" />
                <div className="flex flex-col gap-4">
                    <div className="text-3xl sm:text-4xl text-white">R+ Counselling Space</div>
                    <div className="footer-social text-3xl text-white flex items-center gap-10">
                        <a href="https://wa.me/601129980528" target="_blank">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                        
                        <a href="https://www.instagram.com/rplus.counselling/" target='_blank'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>

                        <a href="https://www.xiaohongshu.com/user/profile/USER_ID" target='_blank' className="border-2 p-1 rounded-sm">
                            <img className="w-4.5" src={rednote} alt="rednote" />
                        </a> 
                        
                    </div>
                </div>
            </div>

            <div className="text-white grid grid-cols-2 gap-x-16">
                <div>
                    <h4 className="font-bold text-xl border-b mb-3">Explore</h4>
                    <ul className="footer-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About R+</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#practitioner">About the Practitioner</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-xl border-b mb-3">Sessions</h4>
                    <ul className="footer-links">
                        <li><a href="#session">Session Mode</a></li>
                        <li><a href="#booking">Book a Session</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="text-white text-center pt-3 border-t">
            <div>
               © 2026 R+ Counselling Space. All Rights Reserved. 
            </div>
            <div>
                RT POSSIBILITIES ENTERPRISE | Registration No: 20250316676018 (RA03354240-T)
            </div>
        </div>
    </footer>
  )
}

export default Footer