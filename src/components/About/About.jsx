import './About.css'
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const spaceTitle = t('about_title');

  return (
    <div id="about" className='about bg-[#bbccc2] pt-8 pb-20 sm:py-24 px-[5%] sm:px-[10%] xl:px-[20%]'>
      <div className='flex flex-col gap-8 md:flex-row sm:gap-11 items-center'>
        <h2 className='text-5xl sm:text-[56px] text-[#5a6a5d] font-bold text-center w-52 sm:w-64 py-16 bg-[url("../src/assets/about.png")] bg-no-repeat bg-center bg-contain'>
            R+
        </h2>

        <div className='flex-7 p-5 sm:p-9 bg-white text-[#5a6a5d] text-lg sm:text-[21px] flex flex-col gap-6 shadow-2xl z-10 rounded-2xl'>
          <p className='text-2xl font-bold'>About the Space</p>
          <p>
            <Trans 
              i18nKey="about_paragraph" 
              values={{ title: spaceTitle }} 
              components={{
                  bold: <b />,
                  highlight1: <span className='p-1 bg-[#e9e9e9] rounded-full' />,
                  highlight2: <span className='p-1 bg-[#f3e3d5] rounded-full' />,
                }}
              >
            </Trans>
          </p>
          <p>
            <Trans i18nKey="about_paragraph_2"></Trans>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About