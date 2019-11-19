import React from 'react'
import './numberbutton.css'

const NumberButton = (props) => {
  return(
    <div>
      <button className="number-button" type="button">{props.number}</button>
    </div>
  )
}

export default NumberButton