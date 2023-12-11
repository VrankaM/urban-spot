'use client';
import React from 'react'
import Link from 'next/link';

const NavButton = (props: {title: string, href: string}) => {
  return (
    <button className='nav-header-button'>
      <Link href={`/${props.href}`}>
        <h3 className='nav-header-button-title'>
          {props.title}
        </h3>
      </Link>
    </button>
  )
}

export default NavButton;