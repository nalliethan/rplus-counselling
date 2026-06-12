import './Services.css'
import serviceBg from '../../assets/service.png';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { div } from 'framer-motion/client';

const Services = () => {
  const { t } = useTranslation();
  const serviceData = t('services.list', { returnObjects: true });
  const areaOfSupport = t('services_support', { returnObjects: true });

  const [openIds, setOpenIds] = useState([]);
  
  const toggleFAQ = (id) => {
    setOpenIds((prevOpenIds) => {
        // If the ID is already in the array, remove it (close the item)
        if (prevOpenIds.includes(id)) {
            return prevOpenIds.filter((itemOpenId) => itemOpenId !== id);
        } 
        // Otherwise, add the ID to the array (open the item)
        else {
            return [...prevOpenIds, id];
        }
    });
  };

  return (
    <div id="services" className='about relative bg-[#fff4e9] py-14 px-[6%] lg:px-[7%] flex flex-col gap-10'>
        <img className='absolute -top-32 -left-20 w-112.5' src={serviceBg} alt="service" />
        <h2 className='relative text-4xl sm:text-[60px] text-[#fff4e9] mx-auto w-fit px-10 py-9 bg-[url("../src/assets/services.png")] bg-no-repeat bg-center bg-contain'>
            {t('services_title')}
        </h2>

        <p className='text-[#55675b] text-[21px] sm:px-[10%]'>
          {t('services_subtitle')}
        </p>
    
        <div className='flex flex-wrap gap-4 lg:justify-between items-start w-full'>
          {serviceData.map((service, index) => {
            const isOpen = openIds.includes(index);

            return (
              <div key={index} className="bg-white p-3 sm:p-6 rounded-2xl shadow-xl flex flex-col gap-3 w-full xl:w-[23%]">
                <div 
                className="cursor-pointer flex justify-between items-start hover:text-[#c3a082] transition-colors gap-1" 
                onClick={() => toggleFAQ(index)}
                >
                  <span className='service-list'>{service.title}</span>
                  <span className={`text-2xl transition-transform duration-500 transform ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>

                <div className={`${isOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-2`}>
                  {service.desc.map((paragraph, index) => (
                    <p key={index} className='text-[#4a5568]'> 
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className='bg-white p-4 sm:p-8 rounded-2xl shadow-xl w-full sm:w-fit mx-auto flex flex-col gap-6'>
          <p className='text-3xl font-bold text-[#55675b] text-center border-b-[#55675b] border-b-2 border-dotted'>
            {t('services_support_title')}
          </p>
          <ul className='text-[19px] sm:text-[21px] text-[#55675b] flex flex-col gap-8 sm:gap-4'>
            {areaOfSupport.map((support, index) => (
              <li key={index} className='support-list'>{support}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Services