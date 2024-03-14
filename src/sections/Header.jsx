import "./HeadFoot.css"
import React from 'react'
import { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  const [burgerActive, setBurgerActive] = useState(true)
  const ToggleMenu = () =>{
    setBurgerActive(!burgerActive)
  }

 
  return (
    <>
     <header>
      <nav className={burgerActive ? 'deActiveNav' : ''}>
      <div className="img">
      {/* <img src={HeaderBg} alt="/" /> */}
      </div>
      <ul onClick={()=> setBurgerActive(true)}>
        <li><Link to="/my_resume/">Home</Link></li>
        <li><Link to="/my_resume/about">About</Link></li>
        <li><Link to="/my_resume/contact">Contact</Link></li>
        <li><Link to="/my_resume/resume">Resume</Link></li>
      </ul>
      </nav>  
      <div className='burgerMenu'>
      <Hamburger onToggle={()=> ToggleMenu()}/>
      </div>
    </header> 
  <Outlet/>

    </>
  )
}


export default Header