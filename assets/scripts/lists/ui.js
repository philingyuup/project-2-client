'use strict'

const store = require('../store.js')
const indexTemplate = require('./../templates/show-lists.handlebars')
const showTemplate = require('./../templates/show-one-list.handlebars')
const api = require('./api.js')

const appendTable = data => {
  const indexLists = indexTemplate({lists: data.lists})
  $('#listDisplay').html(indexLists)
}

const appendOne = data => {
  const indexOne = showTemplate({list: data.list})
  $('#listDisplay').html(indexOne)
}

const indexListSuccess = (data) => {
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

const showListSuccess = (data) => {
  Object.assign(store, data)
  appendOne(data)
  $('form').trigger('reset')
  $('#message').text('Show List Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const createListSuccess = (singleData) => {
  api.indexList()
    .then(data => appendTable(data))
    .catch(error)
  $('form').trigger('reset')
  $('#message').text('Create List Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const updateListSuccess = () => {
  api.indexList()
    .then(data => appendTable(data))
    .catch(error)
  $('form').trigger('reset')
  $('#message').text('Update List Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const deleteListSuccess = () => {
  api.indexList()
    .then(data => appendTable(data))
    .catch(error)
  $('#message').text('Delete List Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

module.exports = {
  error,
  indexListSuccess,
  showListSuccess,
  createListSuccess,
  updateListSuccess,
  deleteListSuccess
}
