import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/logoAhsam.png"
import { useRef } from 'react'
// import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { useState } from 'react'
import menu_open from "../../Assets/menu_open.svg"
import menu_close from "../../Assets/menu_close.svg"

const Navbar = () => {
  // let [menu,setMenu] = useState(" ")
  const menuref = useRef("");

  const open_menu = ()=>{
    menuref.current.style.right = "0"
  }
  const close_menu = ()=>{
    menuref.current.style.right="-350px" 
  }
  return (
        <div className='navbar'>
        <img className='logo' src={logo} alt='Logo'/>
        <img className='nav-mob-open' onClick={open_menu} src={menu_open} alt="" />
        <div ref={menuref} className='nav-menu'>
          <img className='nav-mob-close' onClick={menu_close} src={menu_close} alt="" srcset="" />

        <a href="/"> <AnchorLink href="#home"> Home                             </AnchorLink></a>
        <a href="/about"><AnchorLink href="#about" offset={50}> About         </AnchorLink></a>
        <a href="/services"><AnchorLink href="#services" offset={50}>Services    </AnchorLink></a>
        <a href="/myWork"><AnchorLink href="#myWork" offset={50}>Work</AnchorLink></a>
        <a href="/contact">    <AnchorLink href="#contact" offset={50}>Contact</AnchorLink></a>
            </div>
        <div className='contact'>
            <button type="button"> <AnchorLink href="#contact" className='anchor-link'  offset={50}> Contact Me</AnchorLink></button> </div>
          </div>

  )
}

export default Navbar;