/**
* JavaScript date type
* =====================
* Regular Expression
* =====================
* Is a sequence of characters that forms a pattern (ex: used on steps file on BDD, gherkin steps as pattern)
* regular expession methods - test() and match()
* you can create a regular expression using new keyword or inbetween two //
*/

var date = new Date()
console.log(date)

var re = /hello/
var sentence = 'hello world'

console.log(re.test(sentence))

// re = new RegExp() // can be done this way too

/**
* d - digit
* ^ - begining
* $ - end
* g - global
*/
re = /^\d{3}$/
console.log(re.test('hello')) // false
console.log(re.test('123hello')) // false
console.log(re.test('123')) // true

re = /^\d{3}/
console.log(re.test('123hello world')) // now true
