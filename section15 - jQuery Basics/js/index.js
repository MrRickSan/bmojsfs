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
  // $('#target4').appendTo('.left')
  // $('.left').clone().appendTo('.right')
  $('.heading2').parent().css('backgroundColor', 'red') // target parent
  $('.heading2Right').children().css('color', 'red') // target child
  $('.target:nth-child(2)').addClass('swing') // target specific child
  $('.target:odd').addClass('animated swing') // target even odd numbers
})
