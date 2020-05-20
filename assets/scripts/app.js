'use strict'

const userEvents = require('./users/events.js')
const itemEvents = require('./items/events.js')
const listEvents = require('./lists/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  userEvents.addHandlers()
  itemEvents.addHandlers()
  listEvents.addHandlers()
})
