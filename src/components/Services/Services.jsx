import './Services.css'
import serviceBg from '../../assets/service.png';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const serviceData = t('services.list', { returnObjects: true });
  const areaOfSupport = t('services_support', { returnObjects: true });

  return (
    <div id="services" className='about relative bg-[#fff4e9] py-14 px-[10%] lg:px-[10%] flex flex-col gap-10'>
        <img className='absolute -top-32 -left-20 w-112.5' src={serviceBg} alt="service" />
        <h2 className='relative text-4xl sm:text-[60px] text-[#fff4e9] mx-auto w-fit px-10 py-9 bg-[url("../src/assets/services.png")] bg-no-repeat bg-center bg-contain'>
            {t('services_title')}
        </h2>

        <p className='text-[#55675b] text-[21px] sm:px-[10%]'>
          {t('services_subtitle')}
        </p>
    
       <div className='flex flex-wrap gap-10 md:justify-evenly lg:justify-center items-stretch'>
        {serviceData.map((service, index) => (
          <div 
            key={index} 
            className='bg-white p-4 sm:p-7 rounded-2xl shadow-xl flex flex-col gap-4 md:w-[45%] xl:w-[22%]'
          >
            <ul className="xl:h-20">
              <li className='service-list'>{service.title}</li>
            </ul>
            {service.desc.map((paragraph, pIndex) => (
              <p key={pIndex} className='text-[19px] text-[#55675b] leading-relaxed'>
                {paragraph}
              </p>
            ))}
          </div>
          ))}
        </div>

        <div className='bg-white p-4 sm:p-8 rounded-2xl shadow-xl w-fit mx-auto flex flex-col gap-6'>
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