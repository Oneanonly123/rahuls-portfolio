import React from 'react'
import Header from './components/header/Header'
import './index.css'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Service'
import Works from './components/works/Works'
import Toggle from './components/toggle/Toggle'


export const App = () => {
  return (
    <>
          
          <Header/>
          <Nav />
          <About />
          <Experience />
          <Works/>
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact /> 
          <Footer/>
          
      </>
  )
}

export default App
