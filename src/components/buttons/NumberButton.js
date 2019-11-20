import React from 'react'
import './numberbutton.css'

var numbers = []

var number1 = 0
var number2 = 0
var method = ''

const getInput = (input) => {
  if (input === "CE") {
    numbers = []
  } else if (input === "C") {
      numbers = []
  } else if (input === "M1") {
      var memory1 = input
  } else if (input === "M2") {
      var memory2 = input
  } else if (input === "*") {
    number1 = numbers.join("")
    method = "multiply"
  } else if (input === "/") {
    number1 = numbers.join("")
    method = "divide"
  } else if (input === "+") {
    number1 = numbers.join("")
    method = "addition"
  } else if (input === "-") {
    number1 = numbers.join("")
    method = "subtract"
  } else {
    numbers.push(input)
    console.log(numbers.join(""))
  }
}

const getMultiply = (num1, num2) => {
  return num1*num2
}

const getDivide = (num1, num2) => {
  return num1/num2
} 

const getSum = (num1, num2) => {
  return num1 + num2
}

const getSub = (num1, num2) => {
  return num1 - num2
}

const onCalculate = (operator, num1, num2) => {
  if (operator === '*') {
    getMultiply(num1, num2)
  } else if (operator === '/') {
    getDivide(num1, num2)
  } else if (operator === '+') {
    getSum(num1, num2)
  } else if (operator === '-') {
    getSub(num1, num2)
  }
}


const NumberButton = (props) => {
  return(
    <div>
      <button className="number-button" type="button" onClick={() => getInput(props.number)}>{props.number}</button>
    </div>
  )
}

export default NumberButton