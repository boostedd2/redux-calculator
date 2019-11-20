import React from 'react'
import './numberbutton.css'

var numbers = []

var number1 = 0
var number2 = 0
var method = ''

const getInput = (input) => {
  if (input === "CE") {
    numbers = []
    number1 = 0
    number2 = 0
  } else if (input === "C") {
      numbers = []
  } else if (input === "M1") {
      var memory1 = input
  } else if (input === "M2") {
      var memory2 = input
  } else if (input === "*") {
    setNumber()
    method = "multiply"
    console.log(number1)
    console.log(number2)
    number1 = 0
    number2 = 0
  } else if (input === "/") {
    setNumber()
    method = "divide"
    console.log(number1)
    console.log(number2)
    number1 = 0
    number2 = 0
  } else if (input === "+") {
    setNumber()
    method = "addition"
    console.log(number1)
    console.log(number2)
    number1 = 0
    number2 = 0
  } else if (input === "-") {
    setNumber()
    method = "subtract"
    console.log(number1)
    console.log(number2)
    number1 = 0
    number2 = 0
  } else if (input === "D") {
    console.log(number1)
    console.log(number2)
  } else if (input === "=") {
    setNumber()
    console.log("number 1 is " + number1)
    console.log("number 2 is " + number2)
  } else {
    numbers.push(input)
    console.log(numbers.join(""))
  }
}

const setNumber = () => {
  if (number1 === 0) {
    number1 = numbers.join("")
    numbers = []
  } else if (number2 === 0) {
    number2 = numbers.join("")
    numbers = []
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