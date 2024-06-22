import React from 'react';
import "./About.css"
import theme_pattern from "../../Assets/theme_pattern.svg";
import ahsam from "../../Assets/ahsam.jpg";

const About = () => {
  return (
    <div id='about' className='about'>

      <div  className='about-me'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      < div className='about-section'>

        <div className="left">
          <img src={ahsam} alt="" />
        </div>

        <div className="right">
          <p className='first-para'>I am an Experienced Front End Developer. I have been programming for more than 2 years. 
          During this time, I have completed numerous projects that demonstrate my skills and involvement.</p>
          <p className='sec-para'>I make websites customize according to instructions with user-friendly, responsive, quick, with clear call-to-action elements, and accessible with SEO.</p>

          <div className='skill'>
          <div className='ind-skill'>
              <p className='ind-skill'>HTML & CSS </p><hr style={{width:"50%"}}/> 
              </div>
          
            <div className='ind-skill'>
            <p className='ind-skill'>React Js   </p>  <hr style={{width:"70%"}}/> 
              </div>

              <div className='ind-skill'>
            <p className='ind-skill'>JavaScript </p> <hr style={{width:"60%"}}/> 
            </div>

              <div className='ind-skill'>
              <p className='ind-skill'>Next Js    </p>  <hr style={{width:"50%"}}/>
              </div>
            
         
          
             
          </div>
            </div>
        </div>

        <div className='about-skills'>
          <div className='about-skill'>
            <div>
            <h1>2+</h1>
            <p>Years of Experience</p>
            </div>
            <hr/>
          </div>

          <div className='about-skill'>
           <div>
           <h1>10+</h1>
            <p>Success Projects</p></div>
            <hr />
          </div>

          <div className='about-skill'>
            <div>
            <h1>5+</h1>
            <p>Happy Clients</p>
            </div>
            <hr />
          </div>

        </div>
    </div> 
  )
}

export default About;
