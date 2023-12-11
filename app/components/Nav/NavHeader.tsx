import React from 'react'

import NavButton from './NavButton'
import NavLogo from './NavLogo'
import NavMobile from './NavMobile'
import "../../css/Nav.css"

const NavHeader = () => {
  return (
    <div className="nav">
      <div className="nav-header" id="desktop">
        <div className="nav-header-mobile">
          <NavMobile />
        </div>
        <div className="nav-header-left">
          <NavButton title='Home' href=''/>
          <NavButton title='Program' href='program'/>
          <NavButton title='Služby' href='services'/>
        </div>
        <div className="nav-header-center">
          <NavLogo />
        </div>
        <div className="nav-header-right">
          <NavButton title='O klube' href='about'/>
          <NavButton title='Kontakt' href='contact'/>
          <NavButton title='E-shop' href='eshop'/>
        </div>
      </div>
    </div>
  )
}

export default NavHeader