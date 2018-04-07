/* global alert */
// Javascript Statements
// =====================

/**
* if else
* do while
* while
* for
* for in
* labeled
* break continue
* switch
*/

var num = 100

if (num >= 101) {
  alert('Number is greater or equal to 101')
} else if (num <= 99) {
  alert('Number is smaller or equal to 99')
} else {
  alert('Number is 100')
}

num = 0

do {
  num++
  console.log('Number:', num)
} while (num < 10)

while (num < 15) {
  num++
  console.log('Num:', num)
}

// for (varInitialization; condition; postLoopExpression) {
//  statement
// }

for (var i = 0; i < 10; i++) {
  alert(i)
}

var person = {
  name: 'Ricardo',
  age: 30,
  address: 'Recife'
}

for (i in person) {
  alert(i)
}

// for (i in window) {
//   console.log(i)
// }

num = 0

for (i = 0; i < 10; i++) {
  if (i === 5) {
    break // continue
  }
  num++
}
console.log(num)

num = 0

// outerLabel:
// for (i = 0; i < 10; i++) {
//   for (ii = 0; ii < 10; ii++) {
//     if (i === 5 && ii === 5) {
//       break outerLabel
//     }
//     num++
//   }
// }

// alert(num)

num = 'hi'

switch (num) {
  case 10:
    alert('10')
    break
  case 20:
    alert('20')
    break
  case 'hello':
    alert('Hello there')
    break
  default:
    alert('Nothing found')
}
