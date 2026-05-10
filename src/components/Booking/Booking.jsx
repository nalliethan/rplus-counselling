import { useTranslation } from 'react-i18next';

const Booking = () => {
  const { t } = useTranslation();
  const noteLists = t('book_note_lists', { returnObjects: true });
  const hotlines = t('book_hotlines', { returnObjects: true });

  const message = encodeURIComponent(t('book_pre_fill'));


  return (
    <div id="booking" className='bg-[#fff9f2] w-full'>
        {/* <div className="bg-[#829489] py-6 text-white text-4xl sm:text-5xl lg:text-6xl text-center shadow-lg">
            {t('book_title')}
        </div> */}
        <div className="min-h-[60vh] min-w-[55vw] w-full px-[8%] py-10 text-center text-[#55675b] text-xl sm:text-2xl flex flex-col justify-center gap-14">
            <div>
                {t('book_subtitle')}
            </div>

            <div className="w-full flex justify-center">
                <a href={`https://wa.me/601129980528?text=${message}`} target="_blank" className="flex items-center gap-2 py-4 px-5 sm:px-10 md:px-20 lg:px-24  bg-linear-to-r
                        from-[#ffb676]
                        to-[#ff8c42] text-white text-lg md:text-[26px] rounded-full shadow-2xl cursor-pointer duration-150 hover:bg-[#f4a886] hover:scale-105">
                    <div className='text-4xl flex justify-center'>
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    {t('book_btn')}
                </a>
            </div>

            <div className="text-[16px] w-full flex flex-col justify-center gap-6 md:max-w-[60vw] mx-auto">
               <div>
                    <div className='font-bold'>{t('book_note')}</div>

                    {noteLists.map((service, index) => (
                        <div key={index}>{service}</div>
                    ))}
               </div>
               <div>
                    {hotlines.map((service, index) => (
                        <div key={index}>{service}</div>
                    ))}
               </div>
            </div>            
        </div>
    </div>
  )
 }

export default Booking