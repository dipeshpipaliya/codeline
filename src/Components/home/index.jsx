import React from 'react'
import Slider from './Slider/Slider'
import About from './About/About'
import Services from './Services/Services'
import Work from './Work/Work'
import Business from './Bussiness/Business'
import Department from './Department/Department'
import Discover from './Discover/Discover'
import Fitness from './Fitness/Fitness'
import Signboards from './Signboards/Signboards'
import Dell from './Dell/Dell'
import Client from './Client/Client'
import Contact from './Contact/Contact'
import Questions from './Questions/Questions'


function home() {
  return (
    <>
      <Slider />
      <Services />
      <About />
      <Business />
      <Work />
      <Department />
      <Discover />
      <Fitness/>
      <Signboards/>
      <Dell/>
      <Client/> 
      <Contact/>
      {/* <Questions/>   */}
          </>
  )
}

export default home