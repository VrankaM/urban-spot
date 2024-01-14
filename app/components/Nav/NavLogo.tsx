import Link from 'next/link'
import React from 'react'

const NavLogo = () => {
  return (
    <div className='nav-header-logo-wrapper'>
      <Link href={"/"} > 
          <img className='nav-header-logo' src="/images/header-urban-logo.png" alt="urban logo" />
      </Link>
    </div>
  )
}

export default NavLogo;