'use strict'

const store = require('../store.js')

const indexItemSuccess = (data) => {
  console.log(data)
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
  console.log(data)
  $('form').trigger('reset')
  $('#message').text('Show Item Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const createItemSuccess = (data) => {
  console.log(data)
  $('form').trigger('reset')
  $('#message').text('Create Item Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const updateItemSuccess = () => {
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
