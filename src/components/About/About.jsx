import './About.css'

const About = () => {
  return (
    <div id="about" className='about bg-[#bbccc2] py-10 sm:py-24 px-[10%] xl:px-[20%]'>
      <div className='flex flex-col gap-8 md:flex-row sm:gap-11 items-center'>
         <h2 className='text-5xl sm:text-[56px] text-[#5a6a5d] font-bold text-center w-52 sm:w-64 py-16 bg-[url("../src/assets/about.png")] bg-no-repeat bg-center bg-contain'>
            R+
        </h2>

        <div className='flex-7 p-5 sm:p-10 bg-white text-[#5a6a5d] text-lg sm:text-[21px] flex flex-col gap-6 shadow-2xl z-10 rounded-2xl'>
          <p className='text-2xl font-bold'>About the Space</p>
          <p>
            <b>R+ Counselling Space</b> provides a <span className='p-1 bg-[#e9e9e9] rounded-full'>safe</span>,<span className='p-1 bg-[#e9e9e9] rounded-full'>confidential</span>, 
            and <span className='p-1 bg-[#e9e9e9] rounded-full'>professional</span> environment 
            for adolescents and adults to explore emotional concerns, 
            navigate life challenges, and develop healthier ways of coping through <span className='p-1 bg-[#f3e3d5] rounded-full'>evidence-informed</span> counselling support.
          </p>
          <p>
            The “+” represents the potential for growth, change, and new possibilities over time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About