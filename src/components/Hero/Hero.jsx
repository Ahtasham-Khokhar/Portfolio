import React from 'react'
import "./Hero.css"
import ahsam from "../../Assets/ahsam.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
   <div id='home'  className='hero' >
    <img src={ahsam} alt="" srcset="" />
    <h1>Hello I'am Ahsam,<span>Frontend Develper <br/> In Faislabad Pakistan</span></h1>
    <p>Hey, I am frontend Developer. Every Day I add something in my skill and polish it.I make Projects 
        and work on Quality and ignore shirking</p>
        <div className='hero-section'>
            <button className='connect'><AnchorLink href="#contact" className='anchor-link' offset={50}>Connect With Me</AnchorLink></button>
            <button className='my-resume'>My Resume</button>
        </div>
    
   </div>
  )
}

export default Hero;