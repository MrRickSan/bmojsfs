// Javascript Functions
// =====================

/**
* With functions, you can encapsulate Statements
* that can be run everywhere
* functions can be called with name and arguments with comma
* not necessary to return a value
* function stops executing on return statement
* you have have multiple returns
*/
/**
* arguments are not necessary and can be any data type or none
* Array like object represents arguments internally []
* you can access each arguments using bracket notation
* determine number of arguments using Arraylength property
*/

function total (one, two) {
  var totalThis = one + two
  return totalThis
}

var result = total(1, 2)
var anotherResult = total(100, 500)
console.log(result)
console.log(anotherResult)

function nameCheck (name) {
  if (name === 'Ricardo') {
    return 'Hi Ricardo'
  } else {
    return 'I dont know you'
  }
}

console.log(nameCheck('Fulano'))

function sayHi () {
  return arguments[0] + arguments[1] + arguments[2]
}

console.log(sayHi('Ricardo ', 'JS functions are great! ', 'right?'))

function shopping () {
  if (arguments.length >= 2) {
    console.log('you are garanted 20% discount')
  } else if (arguments.length <= 1) {
    console.log('you are not getting any discount!')
  }
}

shopping('one', 1)
