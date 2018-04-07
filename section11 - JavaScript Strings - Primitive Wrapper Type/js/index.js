/**
* JavaScript Primitive Wrapper Type
* =====================
* String, Number, Boolean
*/

var person = {
  name: 'Rick'
}
person.age = 30
console.log(person)

var myString = 'hello world'
myString.age = 30
console.log(myString) // nothing happens

// In JavaScript everything is an object
// ex: var myString = new String('hello world')
// ex: var num = new Number(10)
// ex: var bool = new Boolean(true)

/**
* String manipulation methods
* concat, slice, substr, substring
* indexOf(), lastIndexOf(), trim(), toUpperCase(), toLowerCase()
*/

var strVal = 'hello'
var result = strVal.concat(' world', '!')
console.log(result)

console.log(result.slice(3)) // lo world
console.log(result.slice(3, 7)) // lo w (position 3 to 7)

console.log(result.substring(3)) // lo world
console.log(result.substring(3, 7)) // lo world

console.log(result.substr(3))
console.log(result.substr(3, 7))

console.log(result.indexOf('o')) // 4
console.log(result.indexOf('o', 6)) // 7  (starts at position 6)
console.log(result.lastIndexOf('o')) // 7
console.log(result.lastIndexOf('o', 6)) // 4 (starts at position 6 and goes to begining of the strin)

result = '      hello world'
console.log(result.trim()) // removes blank spaces at the begining

console.log(result.toUpperCase())
result = 'HELLO WORLD'
console.log(result.toLowerCase())

/**
* STRING PATTERN MATCHING
* match, search, replace, split
*/

var text = 'cat, bat, sat, fat'
var pattern = /.at/

var matches = text.match(pattern)
console.log(matches.index) // 0
console.log(matches[0]) // cat

pattern = /at/
// returns 1, witch is the first position of a 'at' in the string
matches = text.search(pattern)
console.log(matches)

result = text.replace('at', 'ond')
console.log(result) // cond, bat, sat, fat

result = text.replace(/(.at)/g, 'world($1)')
console.log(result)

var colorText = 'red, blue, green, yellow'

var colors = colorText.split(', ')
console.log(colors)
