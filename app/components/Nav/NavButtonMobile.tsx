'use client';
import React from 'react'
import Link from 'next/link';

interface NavButtonMobileProps {
  title: string; 
  href: string; 
  click:() => void;
}

const NavButtonMobile: React.FC<NavButtonMobileProps> = (props) => {
  return (
    <button className='nav-header-button-mobile' onClick={props.click}>
      <Link href={`/${props.href}`}>
        <h3 className='nav-header-button-mobile-title'>
          {props.title}
        </h3>
      </Link>
    </button>
  )
}

export default NavButtonMobile;