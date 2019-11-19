import React from 'react'
import './display.css'

const Display = () => {
  return(
    <div className="display-container">
      <input className="display-contents" type="text" value="0" disabled />
    </div>
  )
}

export default Display