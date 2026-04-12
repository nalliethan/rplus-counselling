import './Practitioner.css'
import practitioner from '../../assets/practitioner.png';

const Practitioner = () => {
    const practitionerData = [
        'Licensed and Registered Counsellor (Lembaga Kaunselor Malaysia)',
        'Certified Counselling Supervisor (Lembaga Kaunselor Malaysia)',
        'M. Ed (Guidance and Counselling)'
    ]


  return (
    <div id="practitioner" className='flex flex-col lg:flex-row items-center bg-[#fffcfc] py-[20%] px-[9%] sm:py-24 sm:px-[15%]' >
        <h1 className='block lg:hidden text-[40px] text-[#55675b] font-bold leading-none mb-4 w-full'>About the Practitioner</h1>

        <img 
            className='w-fit h-fit mb-4 lg:absolute lg:object-contain lg:right-20 xl:right-40' 
            src={practitioner} 
            alt="practitioner" 
        />

        <div className='flex flex-col gap-8 lg:basis-[60%] xl:basis-[70%] text-[#55675b] text-xl lg:relative lg:z-10 '>
            <h1 className='hidden lg:block text-4xl lg:text-5xl font-bold mb-4'>About the Practitioner</h1>
            
            <div>
                <div className='text-xl sm:text-2xl font-bold mb-2'>
                    Than Liying, Rachael (K.B.;P.A)
                </div>
                <ul>
                    {practitionerData.map((service, index) => (
                        <li key={index} className='practitioner-list mb-4'>{service}</li>
                    ))}
                </ul>
            </div>

            <div>
                Rachael provides counselling support for adolescents and adults in a safe, confidential, and non-judgmental space.
            </div>

            <div>
                Her work is grounded in empathy, curiosity, and a collaborative approach, supporting individuals in exploring emotional experiences, 
                navigating life challenges, and working toward meaningful and sustainable change.
            </div>

            <div>
                With experience in school settings and leadership roles within counselling team, she has supported individuals and 
                communities through emotional wellbeing concerns, life transitions, and interpersonal and developmental challenges.
            </div>
        </div>
    </div>
    
  )
}

export default Practitioner