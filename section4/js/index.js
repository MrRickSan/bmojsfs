/* global alert */
// Javascript Operators
// =====================

/**
* unary Operators
* boolean Operators - logical ! && ||
* multiplicative Operators * / %
* additive Operators
* relational Operators - < > <= >=
* equality Operators - == === != !==
* conditional Operators - ternary Operator
* assignment Operators
* comma Operators
*/
var age = 30
age++ // postfix
console.log(age)

var age2 = 30
--age2 // prefix
console.log(age2)

// conversion
var str1 = '01'
var str2 = '1.1'
var str3 = 'zzz'

str1 = +str1
console.log(str1)
str2 = +str2
console.log(str2)
str3 = +str3
console.log(str3)

str1 = -str1
console.log(str1)
str2 = -str2
console.log(str2)
str3 = -str3
console.log(str3)

alert(!false) // true (non-false)
alert(!!false) // false (non-non-false)

var result = true && 'hello world'
console.log(result)
result = false && 'hello world'
console.log(result)

result = true || true
console.log(result)

result = true || false
console.log(result)

result = 2 * 10
console.log(result)
result = 10 / 2
console.log(result)
result = 10 % 3 // left over
console.log(result)

var name = 'Ricardo'
age = 30
var sentence = 'My name is ' + name + ' and my age is ' + age // toString()
console.log(sentence)

result = 10 < 20
console.log(result)
result = 10 <= 9
console.log(result)

result = 'Brick' < 'alphabet'
console.log(result)

// console.log('1' == 1)
// console.log(1 != 1)
// console.log(false == 0)
// console.log(true == 1)

// identically equal Operators
console.log('1' === 1)
console.log('1' !== 1)

var num1 = 200
var num2 = 100
result = num1 > num2 ? 'That is correct' : 'That is wrong'
console.log(result)

var num = 10
// num = num + 10
num += 10 // compound assignment operator
console.log(num)

var name1, age1, address // comma operator
console.log(name1 + age1 + address)
