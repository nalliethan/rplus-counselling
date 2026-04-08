import './About.css'

const About = () => {
  return (
    <div className='about bg-[#bbccc2] p-24 px-[10%] lg:px-[15%] mx-auto flex flex-col gap-14 md:gap-24'>

      <div className='flex gap-11 items-center'>
        <img src="src/assets/about.png" alt="about-img" className='absolute w-[20%] left-[13%]'/>
        <div className='flex-3 text-[56px] text-[#5a6a5d] font-bold text-center relative'>R+</div>

        <div className='flex-7 p-16 bg-white text-[#5a6a5d] text-[21px] flex flex-col gap-6 shadow-2xl'>
          <p className='text-2xl font-bold'>About the Space</p>
          <p>
            <b>R+ Counselling Space</b> provides a <span className='p-1 bg-[#e9e9e9] rounded-full'>safe</span>,<span className='p-1 bg-[#e9e9e9] rounded-full'>confidential</span>, 
            and <span className='p-1 bg-[#e9e9e9] rounded-full'>professional</span> environment 
            for adolescents and adults to explore emotional concerns, 
            navigate life challenges, and develop healthier ways of coping through <span className='p-1 bg-[#eedccc] rounded-full'>evidence-informed</span> counselling support.
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