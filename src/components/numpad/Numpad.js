import React from 'react'
import NumberButton from '../buttons/NumberButton'
import './numpad.css'

const Numpad = () => {
  return(
    <div className="number-container">
      <div className="number-row-container">
        <NumberButton number="M1"/>
        <NumberButton number="M2"/>
        <NumberButton number="CE"/>
        <NumberButton number="C"/>
      </div>
      <div className="number-row-container">
        <NumberButton number="7"/>
        <NumberButton number="8"/>
        <NumberButton number="9"/>
        <NumberButton number="*"/>
      </div>
      <div className="number-row-container">
        <NumberButton number="4"/>
        <NumberButton number="5"/>
        <NumberButton number="6"/>
        <NumberButton number="/"/>
      </div>
      <div className="number-row-container">
        <NumberButton number="3"/>
        <NumberButton number="2"/>
        <NumberButton number="1"/>
        <NumberButton number="+"/>
      </div>
      <div className="number-row-container">
        <NumberButton number="+/_"/>
        <NumberButton number="0"/>
        <NumberButton number="."/>
        <NumberButton number="-"/>
      </div>
      <div className="number-row-container"></div>
      <div className="number-row-container"></div>
    </div>
  )
}

export default Numpad