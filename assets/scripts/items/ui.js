'use strict'

const indexTemplate = require('./../templates/items-listing.handlebars')
// const api = require('./api.js')

// used for index items (show all)
const appendTable = data => {
  const indexItems = indexTemplate({items: data.items})
  $('#listDisplay').html(indexItems)
}

const indexItemSuccess = (data) => {
  appendTable(data)
  $('#message').text('Index Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const error = (err) => {
  $('#message').text(`${err.responseJSON.status} error: ${err.responseJSON.message}`)
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const showItemSuccess = (data) => {
  // show item (show one)
  appendTable(data)
  $('form').trigger('reset')
  $('#message').text('Show Item Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const createItemSuccess = (singleData) => {
  $('form').trigger('reset')
  $('#message').text('Create Item Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const updateItemSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('Update Item Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const deleteItemSuccess = () => {
  $('#message').text('Delete Item Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

module.exports = {
  error,
  indexItemSuccess,
  showItemSuccess,
  createItemSuccess,
  updateItemSuccess,
  deleteItemSuccess
}
