'use client';
import React from 'react'
import { useState } from 'react'

import NavButtonMobile from './NavButtonMobile';

const NavMobile: React.FC = () => {
    const[isMenuActive, setMenuActive] = useState(false);

    return (
        <>
            <svg className="nav-header-mobile-icon" onClick={() => setMenuActive(true)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            <div className={`nav-header-mobile-menu ${isMenuActive ? "active" : "hidden"}`}>
                <div className="nav-header-mobile-buttons">
                    <NavButtonMobile title='Home' href='' click={() => setMenuActive(false)}/>
                    <NavButtonMobile title='Program' href='program' click={() => setMenuActive(false)}/>
                    <NavButtonMobile title='Služby' href='services' click={() => setMenuActive(false)}/>
                    <NavButtonMobile title='O klube' href='about' click={() => setMenuActive(false)}/>
                    <NavButtonMobile title='Kontakt' href='contact' click={() => setMenuActive(false)}/>
                    <NavButtonMobile title='E-shop' href='eshop' click={() => setMenuActive(false)}/>
                    <svg className="nav-header-mobile-menu-icon" onClick={() => setMenuActive(false)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default NavMobile;