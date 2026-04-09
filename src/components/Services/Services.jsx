import './Services.css'

const Services = () => {
  const serviceData = [
    {
      title: "Individual Counselling (Adult)",
      desc: ["A safe and confidential space to explore emotional concerns, navigate challenges, and work towards meaningful change at your own pace."]
    },
    {
      title: "Adolescent Counselling (Teens)",
      desc: ["Support for adolescents experiencing emotional difficulties, school-related stress, peer relationships, family communication, and identity development."]
    },
    {
      title: "Parent Consultation",
      desc: ["Support for parents seeking to better understand their child or teenager’s emotional needs, behaviour, and communication patterns."]
    },
    {
      title: "Career Counselling",
      desc: ["Support for individuals exploring career direction, study pathways, decision-making, and transitions in education or work."]
    },
    {
      title: "Workshop & Talks (Upon Request)",
      desc: ["Psychoeducation and wellbeing-focused sessions for schools, organisations, or groups.","Topics are tailored based on needs."]
    }
  ];

  const areaOfSupport = [
    'Emotional wellbeing and stress management',
    'Personal growth and self-understanding',
    'Relationship and interpersonal concerns',
    'Family relationships and parenting challenges',
    'Life transitions, career direction and decision-making'
  ]

  return (
    <div className='about relative bg-[#fff4e9] p-24 px-[10%] lg:px-[15%] flex flex-col gap-14'>
        <img className='absolute -top-36 -left-20 w-112.5' src="src/assets/service.png" alt="service" />
        <h2 className='relative text-[60px] text-[#fff4e9] mx-auto w-fit px-12 py-4 bg-[url("src/assets/services.png")] bg-no-repeat bg-center bg-contain'>
            Services
        </h2>

        <p className='text-[#55675b] text-[21px] px-[10%]'>Counselling services are available for adolescents and adults, focusing on emotional wellbeing, personal challenges, and life transitions.</p>
    
       <div className='flex flex-wrap gap-10 justify-evenly items-stretch'>
        {serviceData.map((service, index) => (
          <div 
            key={index} 
            className='bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-4 min-w-full max-w-[50%] md:w-[30%] lg:w-[30%]'
          >
            <ul className="p-0 m-0">
              <li className='service-list font-bold text-[#55675b] text-2xl'>{service.title}</li>
            </ul>
            {service.desc.map((paragraph, pIndex) => (
              <p key={pIndex} className='text-[19px] text-[#55675b] leading-relaxed'>
                {paragraph}
              </p>
            ))}
          </div>
          ))}
        </div>

        <div className='bg-white p-8 rounded-2xl shadow-xl w-fit mx-auto flex flex-col gap-6'>
          <p className='text-3xl font-bold text-[#55675b] text-center'>Areas of Support</p>
          <ul className='text-[21px] text-[#55675b] flex flex-col gap-4'>
            {areaOfSupport.map((support, index) => (
              <li key={index} className='support-list'>{support}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Services