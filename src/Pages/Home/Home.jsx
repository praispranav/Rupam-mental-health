import React from 'react'
import'./Home.scss'
import Hero from '../../Component/Pages/Home/Hero'
import Spec from '../../Component/Pages/Home/Spec'
import Information from '../../Component/Pages/Home/Information'
import Learn from '../../Component/Pages/Home/Learn'
import About from '../../Component/Pages/Home/About'
import Team from '../../Component/Pages/Home/Team'
import Prize from '../../Component/Pages/Home/Prize'
import Testimonial from '../../Component/Pages/Home/Testimonial'

const Home = () => {
  return (
    <>
    <Hero/>
    <Spec/>
    <Information/>
    <Learn/>
    <About/>
    <Team/>
    <Prize/>
    <Testimonial/>
    </>
  )
}

export default Home
