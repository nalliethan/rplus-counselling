const Booking = () => {
  return (
    <div id="booking" className='bg-[#fff4e9] w-full'>
        <div className="bg-[#829489] py-6 text-white text-4xl sm:text-5xl lg:text-6xl text-center">Book A Session</div>
        <div className="min-h-[60vh] w-full px-[10%] md:px-[20%] lg:px-[25%] xl:px-[30%] py-20 text-center text-[#55675b] text-lg md:text-2xl flex flex-col justify-center gap-14">
            <div>
                You are welcome to reach out via WhatsApp to enquire or arrange a session when you feel ready.            
            </div>

            <div className="w-full flex justify-center">
                <a href="https://wa.me/601129980528" target="_blank" className="flex items-center gap-4 py-4 px-5 sm:px-10 md:px-20 lg:px-24 bg-[#f3966b] text-white text-lg md:text-[26px] rounded-full shadow-2xl cursor-pointer duration-150 hover:bg-[#f4a886] hover:scale-105">
                    <div className='text-4xl flex justify-center'>
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                    Reach Out via WhatsApp
                </a>
            </div>
            
        </div>
    </div>
  )
 }

export default Booking