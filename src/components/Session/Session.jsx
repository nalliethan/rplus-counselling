import session from '../../assets/session.png'
import { useTranslation } from 'react-i18next';

const Session = () => {
  const { t } = useTranslation();
  
  return (
    <div id="session" className='relative bg-linear-to-r from-[#ffeddb] to-[#ffffff] text-[#55675b] text-lg sm:text-2xl flex items-center justify-center gap-10 sm:gap-14 md:gap-20 lg:gap-28 flex-col md:flex-row p-10 md:py-20 lg:py-38 px-[10%]'>
        <img className='absolute w-[70%] opacity-50 sm:opacity-100 sm:w-[40%] lg:w-[22%] xl:w-[25%] 2xl:w-[18%] bottom-0 md:left-36' src={session} alt="session" />
        
        <h1 className='text-[38px] sm:text-6xl font-bold z-10'>
            {t('session_title')}
        </h1>

        <div className='flex flex-col gap-8 sm:gap-14 lg:max-w-[45%] z-10 font-medium sm:font-normal'>
            <div className='flex items-center gap-3 sm:gap-6'> 
                <div className='min-w-10 flex justify-start items-center'> 
                    <i className="fa-solid fa-laptop"></i>
                </div>
                <span>{t('session_online')}</span>
            </div>
            <div className='flex items-center gap-3 sm:gap-6'> 
                <div className='min-w-10 flex justify-start items-start'>
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>{t('session_location')}</span>
            </div>
            <div className='flex gap-3 sm:gap-6'>
                <div className='min-w-10 flex justify-start items-start mt-1'>
                    <i className="fa-solid fa-clock"></i>
                </div>
                <div className='flex flex-col gap-4'>
                    {t('session_hours')}
                    <div className='text-sm sm:text-lg leading-none'>
                      <div>{t('session_operation_hours1')}</div>
                      <div>{t('session_operation_hours2')}</div>
                      <div className='mt-4'>{t('session_hours_info')}</div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Session