import session from '../../assets/session.png'

const Session = () => {
  return (
    <div id="session" className='min-h-[80vh] relative bg-linear-to-r from-[#ffeddb] to-[#ffffff] text-[#55675b] text-lg sm:text-2xl flex items-center justify-center gap-16 md:gap-20 lg:gap-28 flex-col md:flex-row py-28 md:py-20 lg:py-38 px-[10%]'>
        <img className='absolute w-[70%] opacity-50 sm:opacity-100 sm:w-[40%] lg:w-[22%] xl:w-[25%] 2xl:w-[18%] bottom-0 md:left-36' src={session} alt="session" />
        
        <h1 className='text-[40px] sm:text-6xl font-bold z-10'>Session Mode</h1>

        <div className='flex flex-col gap-14 lg:max-w-[45%] z-10 font-bold sm:font-normal'>
            <div className='flex items-center gap-3 sm:gap-6'> 
                <div className='min-w-10 flex justify-center'> 
                    <i className="fa-solid fa-laptop"></i>
                </div>
                <span>Online Sessions (Available Now)</span>
            </div>
            <div className='flex items-center gap-3 sm:gap-6'> 
                <div className='min-w-10 flex justify-center'>
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>Seremban (In-person sessions coming soon)</span>
            </div>
            <div className='flex gap-3 sm:gap-6'>
                <div className='min-w-10 flex justify-center mt-1'>
                    <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                    Consultation Hours
                    <div className='text-[16px] sm:text-lg leading-none'>
                        Sessions are available by appointment, 
                        with flexible scheduling options on weekdays and selected weekends.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Session