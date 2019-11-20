import React from 'react'
import './display.css'
import { FIRST_NUMBER, SECOND_NUMBER, OPERATOR } from '../../redux/actions/actions'

var results = 0

const Display = () => {
  return(
    <div className="display-container">
      <input className="display-contents" type="text" value={results} disabled />
    </div>
  )
}

export default Display