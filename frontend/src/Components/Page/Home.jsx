import React from 'react'
import "./Home.css"
import Hero from './Hero'
import Doctors from './Doctors'
import Testimonials from './Testimonials'
import About from './About'
import Footer from './Footer'

export const Home = () => {
  return (
    <div>
     <Hero/>
      <Doctors/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
  )
}
