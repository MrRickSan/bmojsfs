/**
* Execution Context
* =====================
* arrays hold any type of data such as string, number & object
* create array using new keyword or array literal []
* you can pass items to array constructor or literal
* access using bracket notation
* set value using bracket notation or length
* detecting array - Array.isArray()
* conversion methods - toString(), join()
* stack methods - push(), pop()
* queue methods - shift(), unshift()
* reordering methods - reverse(), sort()
* manipulation methods - concat(), slice(), splice()
* location methods - indexOf(), lastIndexOf()
* iteractive methods - every(), some(), filter(), forEach(), map()
* reduce method - reduce(), reduceRight()
*/

var colors = ['red', 'green', 'yellow', 99, ['one', 'two']] // this way is more commonly used
// var colors2 = new Array ('red', 'green', 'yellow')
console.log(colors)
// console.log(colors2)

console.log(colors.length)
colors[1] = 'purple'
console.log(colors[1])
colors.length = 100
console.log(colors)
console.log(Array.isArray(colors))

var colors2 = ['red', 'green', 'blue']
console.log(colors2.toString())
console.log(colors2.join(' - '))

colors = []
colors.push('red', 'green', 'indigo')
console.log(colors)

var removedItem = colors.pop()
console.log('Removed Item:', removedItem)

colors = []
colors.unshift('red', 'blue', 'green')
colors.unshift('purple', 'cyan')
console.log(colors)
removedItem = colors.shift()
console.log(colors, 'Removed: ', removedItem)

var values = [1, 2, 3, 4, 5]
values.reverse()
console.log(values)
values = [0, 10, 50, 100, 150]
console.log(values.sort())
// function to sort correctly a array of numbers
function compare (val1, val2) {
  return val1 - val2
}
console.log(values.sort(compare))
values = ['apple', 'banana', 'orange', 'mango', 'fig']
console.log(values.sort())
// function to sort a array of strings
function compareString (val1, val2) {
  if (val1 > val2) {
    return -1
  } else if (val1 < val2) {
    return 1
  } else {
    return 0
  }
}
console.log(values.sort(compareString))

colors = ['red', 'green', 'yellow']
var totalColors = colors.concat(['black', 'purple'])
console.log(totalColors)
console.log(totalColors.slice(1, 4))

var deletedItems = totalColors.splice(3, 1) // position of the first item (3), delete (1) element
console.log('Colors: ', totalColors, 'Deleted: ', deletedItems)

deletedItems = totalColors.splice(1, 4, 'I am not a color', 'many') // remove 4 elements and replace for other ones passed
console.log('Colors: ', totalColors, 'Deleted: ', deletedItems)
