import React from 'react'

const ProgramEventBig = (props: {image: string, dateTime: string, title: string, link: string}) => {
  return (
    <div className="program-event-big" id={props.image}>
      <div className="program-event-big-bottom">
        <div className="big-bottom-left">
          <img className='program-event-icon' src="/images/header-urban-logo.png" alt="" />
        </div>
        <div className="big-bottom-center">
          <h2>{props.dateTime}</h2>
          <h3>{props.title}</h3>
        </div>
        <a href={props.link} className="big-bottom-right">
          <h4>zistiť viac</h4>
        </a>
      </div>
    </div>
  )
}

export default ProgramEventBig;