/**
* Execution Context
* =====================
* execution context of a variable or function defines
* what other data is has access to
* each function call has its own execution context
*
* Global Execution Context
* ============================
* global execution context is the outermost one
* in web browsers, it is window object
*
* Scope Chain
* ================
* when code is executed in context, a scope chain is created
* its purpose is to provide access to all variables and ...
* ...functions needed to the execution context
* this chain continues as needed until global context...
* ...is reached witch is a window object
*
* No Block Level Scope (possible now in EcmaScript-6 using 'let' or 'const'. They dont become part of global window object like 'var')
* ====================
* in other programming languages such as c or java...
* ...code blocks enclosed by brackets have thier own scope
* but its not true in javascript - if | for
*
* var is automatically added to the immediate context
* in function, the most immediate is the functions context
*
* JavaScript Reference Type
* =========================
* in traditional programming languages such as java...
* ... classes are reference type but in javascript its object
* Object type is the base from which all other reference types
* ...inherit basic behavior.
* all reference types such as Array, Date and RegExp...
* ... inherit their basic behavior from object type
*/

var color = 'blue' // this is on a global context, if we input on the browser console "window.color" the output will be 'blue'

function colorUpdate () {
  var anotherColor = 'red'
  var color = 'purple'
  return color
}

console.log(colorUpdate())
console.log(color)

if (true) {
  var color = 'red' // added to the global context
  const secondColor = 'yellow' // added to block level (EcmaScript-6 +)
}

function sayColor () {
  var color = 'green' // added to the function context
}
