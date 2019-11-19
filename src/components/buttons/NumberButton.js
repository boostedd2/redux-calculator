import React from 'react'
import './numberbutton.css'

const NumberButton = (props) => {
  return(
    <div>
      <div className="number-button">{props.number}</div>
    </div>
  )
}

export default NumberButton