/* global $ */
/*
 https://getbootstrap.com/docs/4.0/components/buttons/
 https://cdnjs.com/libraries/animate.css/
 https://daneden.github.io/animate.css/
*/
$(document).ready(function () {
  $('button').addClass('animated bounce')
  $('.btn-success').addClass('animated shake')
  // $('#target6').addClass('fadeOut')
  $('button').removeClass('btn-secondary')
  $('#target1').css({color: 'white', backgroundColor: 'pink'}) // custom css
  $('#target4').prop('disabled', true) // target the element properties
  $('h1').html('Learning <strong>jQuery</strong> is so much fun!') // add html
  $('#title2').text('Learning <strong>jQuery</strong> is so much fun!')
  // $('#target5').remove()
  // $('#target5').removeClass()
  $('#target4').appendTo('.left')
  $('.left').clone().appendTo('.right')
})

// target parent
// target child
// target specific child
// target even numbers
