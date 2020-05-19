'use strict'

const store = require('../store.js')
const indexTemplate = require ('./../templates/items-listing.handlebars')
const api = require('./api.js')

const appendTable = data => {
  const indexItems = indexTemplate({items: data.items})
  $('#display').html(indexItems)
  $('#tableContent tbody').on('click', 'tr', function () {
    $($(this).data('target')).collapse('toggle')
  })
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
  $('form').trigger('reset')
  $('#message').text('Show Item Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const createItemSuccess = (singleData) => {
  api.indexItem()
    .then(data => appendTable(data))
    .catch(error)
  $('form').trigger('reset')
  $('#message').text('Create Item Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const updateItemSuccess = () => {
  api.indexItem()
    .then(data => appendTable(data))
    .catch(error)
  $('form').trigger('reset')
  $('#message').text('Update Item Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const deleteItemSuccess = () => {
  api.indexItem()
    .then(data => appendTable(data))
    .catch(error)
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
