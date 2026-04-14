import { useTranslation } from 'react-i18next';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <div id="booking" className='bg-[#fff4e9] w-full'>
        <div className="bg-[#829489] py-6 text-white text-4xl sm:text-5xl lg:text-6xl text-center">
            {t('book_title')}
        </div>
        <div className="min-h-[60vh] min-w-[55vw] w-full px-[10%] py-20 text-center text-[#55675b] text-lg md:text-2xl flex flex-col justify-center gap-14">
            <div>
                {t('book_subtitle')}            
            </div>

            <div className="w-full flex justify-center">
                <a href="https://wa.me/601129980528" target="_blank" className="flex items-center gap-4 py-4 px-5 sm:px-10 md:px-20 lg:px-24 bg-[#f3966b] text-white text-lg md:text-[26px] rounded-full shadow-2xl cursor-pointer duration-150 hover:bg-[#f4a886] hover:scale-105">
                    <div className='text-4xl flex justify-center'>
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    {t('book_btn')}
                </a>
            </div>
            
        </div>
    </div>
  )
 }

export default Booking