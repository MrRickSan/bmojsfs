/**
* OBJECT ORIENTED JAVASCRIPT
* =====================
* Factory pattern, Constructor pattern, Prototype pattern
*/

// Objects are group of name-value pairs
var person = {
  name: 'Rick',
  sayName: function () {
    console.log(this.name)
  }
}

person.sayName()

// Factory pattern
function createPerson (name, age, job) {
  var obj = {} // new Object()
  obj.name = name
  obj.age = age
  obj.job = job
  obj.sayName = function () {
    console.log(this.name)
  }
  return obj
}

var person1 = createPerson('Ricardo', 30, 'Developer')
person1.sayName()
console.log(person1)

var person2 = createPerson('Zen', 20, 'Doctor')
console.log(person2)

// Constructor pattern
// The only difference is the way which they are called
// Any function that is called with the new operator acts as a constructor

// by convention func name begins in upper case
function Person (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}

var person3 = new Person('John', 25, 'CEO')
console.log(person3)
person3.sayName()

// Prototype pattern
console.log(Person.prototype.constructor)

function NewPerson () {
  //
}

NewPerson.prototype.name = 'Doe'
NewPerson.prototype.age = 30
NewPerson.prototype.job = 'Engineer'
NewPerson.prototype.sayName = function () {
  console.log(this.name)
}

var person4 = new NewPerson()
console.log(person4)
person4.sayName()

console.log(NewPerson.prototype.isPrototypeOf(person4))
