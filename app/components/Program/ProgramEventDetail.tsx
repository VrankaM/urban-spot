import React from 'react'

const ProgramEventDetail = () => {
  return (
    <div className="program-event-detail">
      <div className="program-event-detail-left">
        <img className='event-detail-image' src="/images/TAOMI.jpg" alt="" />
      </div>
      <div className="program-event-detail-right">
        <h3>20:00 | 10.11. PIATOK</h3>
        <h1>Taomi + kapela</h1>
        <p>Jedinečný zážitok v podobe alternatívnej hudby, ktorý Vám môže ponúknuť len Taomi si vychutnáte v celovečernom predstavení len u nás, v Urban Spote.</p>
        <h2>Vstup: 7€</h2>
      </div>
      <a href='/program' className="event-detail-back">
        ← všetky akcie
      </a>
    </div>
  )
}

export default ProgramEventDetail