/* global alert, prompt */
/* eslint no-unused-vars: "error" */
/*
 BOM - Browser Object Model

 html document is represented as element nodes
 window object properties:
                           document
                           localStorage
                           location - href / pathname
                           navigator.geolocation
                           history - back/forward
window object methods:
                       alert()
                       prompt()
                       open/close
                       setInterval()
                       setTimeout()
*/

// var result = prompt('What is your name?')
// if (result) {
//   // alert('welcome ' + result)
// }

setTimeout(function () {
  // alert('hello world')
}, 3000) // execute after 3 seconds, once

setInterval(function () {
  // alert('hello world')
}, 3000) // execute every 3 seconds

/*
 document write
 get attribute
 set attribute
 create element
*/

document.write('Hello World writting in document')

var div = document.getElementById('root')
console.log(div.getAttribute('id'))
div.setAttribute('id', 'hahaha')
console.log(div.getAttribute('id'))

function myClick () { // eslint-disable-line no-unused-vars
  var div = document.createElement('h1')
  var text = 'hello world'
  var newH1 = document.body.appendChild(div)
  newH1.innerText = text
}

/*
 FINDING THE HTML ELEMENTS IN THE DOCUMENT OBJECT
*/

document.getElementById('root') // get by id
document.getElementByClassName('intro') // class names
document.getElementByTagName('p') // tags such as p or h1
document.querySelectorAll('p.intro') // using css selectors
document.getElementById('root').innerHTML = 'sdiuhiuasdhiuasduyfuya'
