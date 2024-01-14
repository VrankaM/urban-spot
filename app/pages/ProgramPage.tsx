import React from 'react'

import ProgramEventBig from '../components/Program/ProgramEventBig'
import '../css/Home.css'
import '../css/Program.css'

const ProgramPage = () => {
  return (
    <div className="program-page">
      <div className="program-page-content">
        <ProgramEventBig image='taomi' dateTime='10.11. | 20:00' title='Taomi + kapela' link='/program/taomi'/>
        <ProgramEventBig image='mikla' dateTime='16.11. | 20:00' title='robo mikla a kapitán george afterparty' link='/program'/>
        <ProgramEventBig image='invalid' dateTime='9.12. | 20:00' title='invalid prodakšn stand up comedy show' link='/program'/>
        <ProgramEventBig image='konflikt' dateTime='12.4. | 20:00' title='konflikt - hrubý domáci produkt' link='/program'/>
        <a href="/" className='home-program-link'>← home</a>
     </div>
    </div>
  )
}

export default ProgramPage;