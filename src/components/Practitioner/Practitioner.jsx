import './Practitioner.css'
import practitioner from '../../assets/practitioner.png';
import { useTranslation } from 'react-i18next';

const Practitioner = () => {
  const { t } = useTranslation();
  const practitionerData = t('practitioner_data', { returnObjects: true });

  return (
    <div id="practitioner" className='flex flex-col lg:flex-row items-center bg-[#fffcfc] py-[20%] px-[9%] sm:py-24 sm:px-[18%]' >
        <h1 className='block lg:hidden text-[40px] text-[#55675b] font-bold leading-none mb-4 w-full'>
            {t('practitioner_title')}
        </h1>

        <img 
            className='w-fit h-fit mb-4 lg:absolute lg:object-contain lg:right-20 xl:right-40' 
            src={practitioner} 
            alt="practitioner" 
        />

        <div className='flex flex-col gap-8 lg:basis-[60%] xl:basis-[70%] text-[#55675b] text-xl lg:relative lg:z-10 '>
            <h1 className='hidden lg:block text-4xl lg:text-5xl font-bold mb-4'>
                {t('practitioner_title')}
            </h1>
            
            <div>
                <div className='text-xl sm:text-2xl font-bold mb-2'>
                    Than Liying, Rachael <span className='text-lg sm:text-[22px]'>(K.B.;P.A)</span>
                </div>
                <ul>
                    {practitionerData.map((service, index) => (
                        <li key={index} className='practitioner-list mb-4'>{service}</li>
                    ))}
                </ul>
            </div>

            <div>
                {t('practitioner_para1')}
            </div>

            <div>
               {t('practitioner_para2')}
            </div>

            <div>
                {t('practitioner_para3')}
            </div>
        </div>
    </div>
    
  )
}

export default Practitioner