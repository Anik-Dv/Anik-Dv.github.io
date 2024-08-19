import React from 'react'
import "./css/hero.css"

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { TbBrandFiverr } from "react-icons/tb";

function HeaderSocials() {
  return (
    <div className="header__socials">

      <a href="https://www.linkedin.com/in/anikkarmokar/" title="Linkedin" target="_blank" rel='noreferrer'><BsLinkedin /></a>
      <a href="https://github.com/Anik-Dv/" title="Github" target="_blank" rel='noreferrer'><BsGithub /></a>
      <a href="https://www.fiverr.com/adi622" title="Fiverr" target="_blank" rel='noreferrer'><TbBrandFiverr /></a>
    </div>
  )
}

export default HeaderSocials
