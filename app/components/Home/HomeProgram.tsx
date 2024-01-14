import React from 'react'

import ProgramEventBig from '../Program/ProgramEventBig';

const HomeProgram = () => {
  return (
    <div className="home-program">
      <div className="home-program-content">
        <ProgramEventBig image='taomi' dateTime='10.11. | 20:00' title='Taomi + kapela' link='/program/taomi'/>
        <a href="/program" className='home-program-link'>všetky akcie →</a>
      </div>
    </div>
  )
}

export default HomeProgram;