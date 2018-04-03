/**
* JavaScript Functions
* =====================
* function declaration are available in the execution context
* function expression are not complete until the execution reaches
* that line of code
*/

// function declaration
console.log(total(1, 2))

function total (num1, num2) {
  return num1 + num2
}

// function expression
var totalExp = function (num1, num2) {
  return num1 + num2
}

console.log(totalExp(1, 2))

// function that receives and calls another function
function callingAFunction (myFunc, myArgs) {
  return myFunc(myArgs)
}

function addHundred (num) {
  return num + 100
}

var result = callingAFunction(addHundred, 1000)
console.log(result)

// function object also has additional property 'caller' which contains
// a reference to the function that called this function or null
function factorial (num) {
  if (num < 1) {
    return 1
  } else {
    return num * factorial(num - 1)
    // return num * arguments.callee(num - 1) // use deprecated
  }
}
console.log(factorial(5))

// 'this' is a reference to the execution context that the function
// is operating on

window.color = 'red'
var obj = {color: 'blue'}

function sayColor () {
  console.log(this.color)
}

sayColor()

obj.sayColor = sayColor
obj.sayColor()

// Function Methods apply(), call(), bind()
function sum (num1, num2) {
  return num1 + num2
}

function callingSum (num1, num2) {
  return sum.apply(this, arguments)
}

console.log(callingSum(11, 11))

function callingSumUsingCall (num1, num2) {
  return sum.call(this, num1, num2)
}

console.log(callingSumUsingCall(111, 111))

window.color = 'red'
var object = {color: 'blue'}

function sayColorFunction () {
  console.log(this.color)
}

var objSayColor = sayColorFunction.bind(object) // binds the function to another context (not global)

objSayColor()
