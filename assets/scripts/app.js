'use strict'

const userEvents = require('./users/events.js')
const itemEvents = require('./items/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#items-link').on('click', function () {
    $('#items').show()
    $('#settings').hide()
  })
  $('#settings-link').on('click', function () {
    $('#settings').show()
    $('#items').hide()
  })
  userEvents.addHandlers()
  itemEvents.addHandlers()
})
