/* global $ */
$(document).ready(function () {
  $('.question').on('click', function () {
    $('.answer').html('jQuery is the best thing in the world!')
  })

  // $('.question').on('mouseover', function () {
  //   $('.answer').html('jQuery is the best thing in the world!')
  // })

  // var url = 'http://hn.algolia.com/api/v1/search?query=javascript'
  // $.getJSON(url, function (data) {
  //   console.log(data)
  // })
})
