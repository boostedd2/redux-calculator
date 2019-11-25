import React, { useState } from 'react'
import './calc.css'

var numbers = []
var dupOps = ['x', '÷', '+', '-']

const Numpad = () => {
  //display and calulate are seperate values
  const [results, setResults] = useState( 0 )
  const [display, setDisplay] = useState( 0 )

  function handleInput(e) {
    var lastItem = numbers.slice(-1)[0]
    if (!dupOps.includes(e.target.value)) {
      numbers.push(e.target.value)
    } else if (!dupOps.includes(lastItem)) {
        if (numbers[0]) {
          numbers.push(e.target.value)
        }
    }
      var nums = numbers.join("")
    //keep the display pretty, but feed usable expressions to eval
    setResults(nums.replace(/x/g, "*").replace(/÷/g, "/"))
    if (nums) {
      setDisplay(nums)
    }
  }

  function clearDisplay() {
    numbers = []
    setResults( 0 )
    setDisplay( 0 )
  }

  function calculate() {
    //continue operations from "numbers", display results
    var calculated = eval(results)
    numbers = [calculated]
    setDisplay(calculated)
    if (numbers[0] === 0) {
      numbers = []
      setDisplay( 0 )
    }
  }

  function toggleNegative() {
    var copyResults = numbers.slice(-1)
    copyResults[0] = parseInt(copyResults[0])
    var selectReplacement = copyResults[0] - (copyResults[0]*2)
    numbers.pop()
    numbers.push(selectReplacement.toString())
    var toggledNum = numbers.join("")
    setResults(toggledNum)
    setDisplay(toggledNum)
  }

  return(
    <>
    <div className="display-container">
      <input className="display-contents" type="text" value={display} disabled />
    </div>
    <div className="number-container">
      <div className="number-row-container">
        <button className="number-button mem" type="button">M</button>
        <button className="number-button cls-all" type="button" onClick={() => clearDisplay()}>CE</button>
        <button className="number-button cls" type="button" onClick={() => clearDisplay()}>C</button>
        <button className="number-button operator" type="button" value="x" onClick={e => handleInput(e, "value")}>x</button>
      </div>
      <div className="number-row-container">
        <button className="number-button nums" type="button" value="7" onClick={e => handleInput(e, "value")}>7</button>
        <button className="number-button nums" type="button" value="8" onClick={e => handleInput(e, "value")}>8</button>
        <button className="number-button nums" type="button" value="9" onClick={e => handleInput(e, "value")}>9</button>
        <button className="number-button operator" type="button" value="÷" onClick={e => handleInput(e, "value")}>÷</button>
      </div>
      <div className="number-row-container">
        <button className="number-button nums" type="button" value="4" onClick={e => handleInput(e, "value")}>4</button>
        <button className="number-button nums" type="button" value="5" onClick={e => handleInput(e, "value")}>5</button>
        <button className="number-button nums" type="button" value="6" onClick={e => handleInput(e, "value")}>6</button>
        <button className="number-button operator" type="button" value="+" onClick={e => handleInput(e, "value")}>+</button>
      </div>
      <div className="number-row-container">
        <button className="number-button nums" type="button" value="1" onClick={e => handleInput(e, "value")}>1</button>
        <button className="number-button nums" type="button" value="2" onClick={e => handleInput(e, "value")}>2</button>
        <button className="number-button nums" type="button" value="3" onClick={e => handleInput(e, "value")}>3</button>
        <button className="number-button operator" type="button" value="-" onClick={e => handleInput(e, "value")}>-</button>
      </div>
      <div className="number-row-container">
        <button className="number-button negative-tog" type="button" onClick={() => toggleNegative()}>+/-</button>
        <button className="number-button nums" type="button" value="0" onClick={e => handleInput(e, "value")}>0</button>
        <button className="number-button dec" type="button" value="." onClick={e => handleInput(e, "value")}>.</button>
        <button className="number-button equal" type="button" onClick={() => calculate()}>=</button>
      </div>
    </div>
    </>
  )
}

export default Numpad