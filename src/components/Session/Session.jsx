import session from '../../assets/session.png'
import { useTranslation } from 'react-i18next';
import shopImg from '../../assets/session-img.jpeg';

const Session = () => {
    const { t } = useTranslation();

    return (
        <div id="session" className='bg-white text-lg sm:text-2xl flex items-center flex-col md:justify-end md:flex-row'>
            <img className='md:absolute md:left-20 lg:left-36  object-cover object-top h-80 w-full md:w-[28%] md:rounded-2xl z-1 shadow-2xl' src={shopImg} alt="img" />

            <div className='md:relative w-full md:max-w-[70vw] bg-[#55675b] text-white p-10 md:py-15 md:pb-30 md:pt-20 px-[15%] flex flex-col gap-8 sm:gap-14 font-medium sm:font-normal'>
                <div className='w-fit'>
                    <h1 className='text-[38px] md:text-5xl lg:text-6xl font-bold'>
                        {t('session_title')}
                    </h1>
                    <div className='flex items-center gap-3 mt-1'>
                        <div className='text-sm min-w-fit'>{t('session_appointment')}</div>
                        <div className='w-full border border-white inline-block'></div>
                    </div>
                </div>

                <div className='flex items-center gap-3 sm:gap-6'>
                    <div className='min-w-10 flex justify-start items-center'>
                        <i className="fa-solid fa-laptop"></i>
                    </div>
                    <span>{t('session_online')}</span>
                </div>
                <div className='flex items-start gap-3 sm:gap-6'>
                    <div className='min-w-10 flex justify-start items-start mt-1'>
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>{t('session_location')}</span>
                        <span className='text-[16px]'>{t('session_location_add')}</span>
                    </div>

                </div>
                <div className='flex gap-3 sm:gap-6'>
                    <div className='min-w-10 flex justify-start items-start mt-1'>
                        <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {t('session_hours')}
                        <div className='text-sm sm:text-lg leading-none'>
                            <div>{t('session_operation_hours1')}</div>
                            <br></br>
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