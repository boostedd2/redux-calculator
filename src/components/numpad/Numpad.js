import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem } from '../../redux/actions/actions'
import './calc.css'
import memoryStorage from '../../redux/reducers/reducers'
import {store} from '../../App'

var numbers = []
var dupOps = ['x', '÷', '+', '-', '.']

const Numpad = ({addItem, memory}) => {
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
    //keep the display readable, but pass usable expressions to eval
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
    //continue operations from results and/or display results
    // eslint-disable-next-line
    var calculated = eval(results)
    numbers = [calculated]
    setDisplay(calculated)
    setResults(calculated)
    if (numbers[0] === 0) {
      numbers = []
      setDisplay( 0 )
    }
  }

  function toggleNegative() {
    //toggles the current number in focus
    if (numbers[0] !== null) {
      var lowerSlice = decimalCheck()
      if (lowerSlice === undefined) {
        var selectNum = numbers.join("")
      } else {
        // eslint-disable-next-line
        var selectNum = numbers.slice(lowerSlice).join("")
      }
      var replacement = selectNum - (selectNum*2)
      var finishedReplacement = replacement.toString()
      if (finishedReplacement !== "NaN") {
        if (lowerSlice === undefined) {
          numbers = []
        } else {
          numbers = numbers.slice(0,lowerSlice)
        }
        if (finishedReplacement === "0") {
          finishedReplacement = null
          numbers.push(finishedReplacement)
        } else {
          numbers.push(finishedReplacement)
        }
        var toggledNum = numbers.join("")
        setResults(toggledNum.replace(/x/g, "*").replace(/÷/g, "/"))
        setDisplay(toggledNum)
      }
    }
  }

  function decimalCheck() {
    //slice correct value to pass for toggleNegative logic, uses additional array method
    if (numbers.length === 1) {
      var sepNumbers = numbers[0].toString().split("")
      var numberScope = numberScope-1
    } else {
      // eslint-disable-next-line
      var sepNumbers = numbers
    }
    for (const [index, element] of sepNumbers.entries()) {
      if (['x', '÷', '+', '-'].includes(element)) {
        var lowerIndex = index + 1
      }
    }
    return lowerIndex
  }

  //extends array object, adds method to find duplicate items index
  // eslint-disable-next-line
  Array.prototype.multiIndexOf = function (el) { 
    var idxs = [];
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === el) {
            idxs.unshift(i);
        }
    }
    return idxs;
  };

  const memoryAdd = () => {
    addItem(results);
  }

  return(
    <>
    <div className="display-container">
      <input className="display-contents" type="text" value={display} disabled />
    </div>
    <div className="number-container">
      <div className="number-row-container">
        <button className="number-button mem" type="button" onClick={() => memoryAdd()}>M</button>
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

function mapStateToProps(state) {
  return {
    memory: state
  };
}

const mapDispatchToProps = { addItem };

export default connect(mapStateToProps, mapDispatchToProps)(Numpad);
