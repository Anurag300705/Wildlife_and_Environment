import React from 'react'
import './events.jsx'
import Events from './events.jsx'

function container() {
  return (
    <div className="eventcontainer">
      <div className="Container">
        <Events />
        <Events />
        <Events />
      </div>
    </div>
  )
}

export default container