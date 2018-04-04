/* global alert, prompt */
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

var result = prompt('What is your name?')
if (result) {
  alert('welcome ' + result)
}

setTimeout(function () {
  alert('hello world')
}, 3000) // execute after 3 seconds, once

setInterval(function () {
  alert('hello world')
}, 3000) // execute every 3 seconds

/*
 document write
 get attribute
 set attribute
 create element
*/
