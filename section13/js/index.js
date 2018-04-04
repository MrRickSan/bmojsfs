// Function declaration
// are read before the code executes
// becomes available in the global execution context

sayHi()
function sayHi () {
  console.log('hi')
}

// Function expression
// looks like a normal variable assignment
// anonnymous function is created and assigned to the variable

// sayHello() // error - function does not exist yet
var sayHello = function () {
  console.log('hello')
}

// Recursion
function factorial (num) {
  if (num <= 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

console.log(factorial(5))

// Function closures

function eat () {
  var fruit = 'Apple'
  function watch () {
    console.log(fruit) // function found fruit in outer function scope
  }
  return watch
}

var favFruit = eat()
favFruit()

// Object closures
var name = 'The window'

var object = {
  name: 'The object',
  getName: function () {
    var that = this
    return function () {
      return that.name
    }
  }
}

console.log(object.getName()())

// Creating block scope using IIFE

function sayColor () {
  var color = 'red'
  console.log(color)
}
// window.sayColor()  => 'red'

(function sayColor () {
  var color = 'red'
  console.log(color)
})()
// window.sayColor() this time fails because is not on the global scope anymore
// we create its own block scope
