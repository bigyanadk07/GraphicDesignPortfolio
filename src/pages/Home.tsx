import React from 'react'
import Hero from '../components/Home/Hero'
import EndofPage from '../components/ui/EndofPage.svg'

const Home:React.FC = () => (
    <div>
        <Hero />
        <img src={EndofPage} alt="" className='w-full h-20'/>
    </div>
)

export default Home
