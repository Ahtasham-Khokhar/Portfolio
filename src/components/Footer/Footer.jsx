import React from 'react'
import "./Footer.css"
import logoAhsam from "../../Assets/logoAhsam.png"
import mail_icon from "../../Assets/mail_icon.svg"

const Footer = () => {
  return (
    <div id='footer' className="footer">
        <div className="footerupper">
            <div className="footer-up-left">
                <img src={logoAhsam} alt="Ahsam Logo" />
                <p>I am Ahsam Perplxer Frontend Developer in Faislabad Pakistan in Programming field more than two years</p>
            </div>
            <div className="footer-up-right">
                <div className='mail'>
                    <img src={mail_icon} style={{width:"40px", height:"40px"}} alt="" />
                    <p>Enter Your Email</p>
                </div>
                <div className='subscribe'> Subscribe</div>
            </div>    
        </div>
        <hr />

        <div className="footerlower">
            <div className="footer-lower-left">
                <p>@2024 Ahsam Perplexer. All rights reserved </p>
            </div>
            <div className="footer-lower-right">
                <p>Term of Policy</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer