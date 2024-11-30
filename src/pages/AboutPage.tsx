import React from 'react'
import AboutSection from '../components/About/AboutSection'
import EndofPage from '../components/ui/EndofPage.svg'

const AboutPage:React.FC = () => {
  return (
    <div>
      <AboutSection/>
      <img src={EndofPage} alt="" className='w-full h-20'/>
    </div>
  )
}

export default AboutPage
