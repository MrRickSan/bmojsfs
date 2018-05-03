// Javascript Data types
// =====================

/**
* Boolean
* Null
* Undefined
* Number
* String
* Symbol
*/

// NaN
var num = 'iuhiusadhas'
console.log(Number(num))

num = '100'
console.log(Number(num))

// isNaN
console.log(isNaN(NaN)) // true
console.log(isNaN(100)) // false
console.log(isNaN('blue')) // true
console.log(isNaN(true)) // true becomes 1 - false becomes 0

var num1 = parseInt('123ikjkljashf')
console.log(num1)
var num2 = parseInt('20.958')
console.log(num2)
var num3 = parseFloat('20.958')
console.log(num3)

var name = 'Ricardo\n Oliveira' // \t (tab) \b(backspace)
console.log(name.length)

var age = 30
var ageStringfy = String(age)
console.log(typeof ageStringfy)
console.log(ageStringfy)
