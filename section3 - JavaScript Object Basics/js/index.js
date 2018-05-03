// Javascript Object types
// =====================

/**
* creating object - {}, new
* accessing properties - . []
* accessing object properties with variables
* updating object properties
* adding new properties
* delete properties
* object has property?
* nested object
*/

// pattern 1
var person = new Object() // eslint-disable-line

person.name = 'Ricardo'
person.age = 30

console.log(person.name, person.age)

// pattern 2
var person = { // eslint-disable-line
  name: 'Ricardo',
  age: 30,
  'my fav things': 'Movies', // not very usual or recommended
  sayName: function () {
    return this.name
  },
  likes: {
    movies: {
      one: 'Interstellar',
      two: 'Avengers'
    },
    book: 'Learning JS'
  }
}

person.name = 'Zen' // change property value
person.address = 'Recife / PE' // add new property

console.log(person['name'], person.age, person['my fav things'], person.address) // brackets notation can also be used
console.log(person.sayName())

delete person.address // delete property
console.log(person.address)

console.log('Has this property? ', person.hasOwnProperty('age'))
console.log('Has this property? ', person.hasOwnProperty('other'))

console.log(person.likes)
console.log(person.likes.movies)
