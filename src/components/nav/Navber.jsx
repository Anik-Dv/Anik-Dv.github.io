import React, { useState } from 'react'
import './css/Navber.css'

import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { GoChecklist } from 'react-icons/go'
import { BiMessageSquareDetail } from 'react-icons/bi'


const Navber = () => {
  const [active, setActive] = useState("#");
  
  return (
    <nav>

        <a href="/" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><BiUser /></a>
        <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><FaLaptopCode /></a>
        <a href="#myprojects" onClick={() => setActive('#myprojects')} className={active === '#myprojects' ? 'active' : ''}><GoChecklist /></a>
        <a href="#contacts" onClick={() => setActive('#contacts')} className={active === '#contacts' ? 'active' : ''}><BiMessageSquareDetail /></a>

    </nav>
  )
}
export default Navber;