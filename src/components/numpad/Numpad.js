import React, { useState } from 'react'
import './numpad.css'

var numbers = []

const Numpad = () => {
  const [results, setResults] = useState( 0 )
  const [display, setDisplay] = useState( 0 )

  function handleInput(e) {
    numbers.push(e.target.value)
    var nums = numbers.join("")
    setResults(nums)
    setDisplay(nums)
  }

  function clearDisplay() {
    numbers = []
    setResults( 0 )
    setDisplay( 0 )
  }

  function calculate() {
    numbers = [eval(results)]
    setDisplay(eval(results))
  }

  return(
    <>
    <div className="display-container">
      <input className="display-contents" type="text" value={display} disabled />
    </div>
    <div className="number-container">
      <div className="number-row-container">
        <button className="number-button" type="button">M1</button>
        <button className="number-button" type="button">M2</button>
        <button className="number-button" type="button" onClick={() => clearDisplay()}>CE</button>
        <button className="number-button" type="button" onClick={() => clearDisplay()}>C</button>
      </div>
      <div className="number-row-container">
        <button className="number-button" type="button" value="7" onClick={e => handleInput(e, "value")}>7</button>
        <button className="number-button" type="button" value="8" onClick={e => handleInput(e, "value")}>8</button>
        <button className="number-button" type="button" value="9" onClick={e => handleInput(e, "value")}>9</button>
        <button className="number-button" type="button" value="x" onClick={e => handleInput(e, "value")}>X</button>
      </div>
      <div className="number-row-container">
        <button className="number-button" type="button" value="4" onClick={e => handleInput(e, "value")}>4</button>
        <button className="number-button" type="button" value="5" onClick={e => handleInput(e, "value")}>5</button>
        <button className="number-button" type="button" value="6" onClick={e => handleInput(e, "value")}>6</button>
        <button className="number-button" type="button" value="÷" onClick={e => handleInput(e, "value")}>÷</button>
      </div>
      <div className="number-row-container">
        <button className="number-button" type="button" value="1" onClick={e => handleInput(e, "value")}>1</button>
        <button className="number-button" type="button" value="2" onClick={e => handleInput(e, "value")}>2</button>
        <button className="number-button" type="button" value="3" onClick={e => handleInput(e, "value")}>3</button>
        <button className="number-button" type="button" value="+" onClick={e => handleInput(e, "value")}>+</button>
      </div>
      <div className="number-row-container">
        <button className="number-button" type="button">+/-</button>
        <button className="number-button" type="button" value="0" onClick={e => handleInput(e, "value")}>0</button>
        <button className="number-button" type="button" value="." onClick={e => handleInput(e, "value")}>.</button>
        <button className="number-button" type="button" onClick={() => calculate()}>=</button>
      </div>
    </div>
    </>
  )
}

export default Numpad