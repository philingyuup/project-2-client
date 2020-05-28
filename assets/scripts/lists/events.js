'use strict'

const store = require('../store.js')
const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const itemApi = require('../items/api.js')
const itemUi = require('../items/ui.js')

// show all
const indexList = () => {
  event.preventDefault()
  api.indexList()
    .then(ui.indexListSuccess)
    .catch(ui.error)
}

// show one
const showList = function (event) {
  event.preventDefault()
  oneActive()
  api.showList($(this).data('id'))
    .then(ui.showListSuccess)
    .catch(ui.error)
}

// makes a new list
const createList = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.createList(form)
    .then(ui.createListSuccess)
    .catch(ui.error)
}

// updates list
const updateList = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.updateList(form)
    .then(ui.updateListSuccess)
    .catch(ui.error)
}

// deletes list
const deleteList = function (event) {
  api.deleteList($(this).data('id'))
    .then(ui.deleteListSuccess)
    .catch(ui.error)
}

// ensures my navbar only has one active link at a time
const oneActive = function () {
  indexList()
  $('#lists').show()
  $('#settings').hide()
  $('#items').hide()
  $('.navbar-collapse').removeClass('show')
}

// makes a hardcoded call to API to update product quantity by minus one.
const reduceOne = function (event) {
  event.preventDefault()
  const num = $(this).data('quantity')
  // hard code for minus one on a certain quantity
  const data = {
    'id': $(this).data('id'),
    'item': {
      'quantity': num - 1
    }
  }
  // condition check to see if we are reducing an item quantity past 0
  if (num > 0) {
    itemApi.updateItem(data)
      .then(() => api.showList(store.list.id))
      .then(data => ui.showListSuccess(data))
      .then(itemUi.updateItemSuccess)
      .catch(ui.error)
  } else {
    $('#message').text("Can't reduce past 0, please delete")
    $('#message').removeClass()
    $('#message').addClass('failure')
  }
}

// handlebar table collapse feature
const collapse = function () {
  event.preventDefault()
  $($(this).data('target')).collapse('toggle')
}

const addHandlers = () => {
  $('#index-list').on('click', indexList)
  $('#update-list').on('submit', updateList)
  $('#lists-link').on('click', oneActive)
  $('#listDisplay').on('click', '.showListButton', showList)
  $('#listDisplay').on('click', '.reduceOneButton', reduceOne)
  $('#listDisplay').on('click', '.clickCollapse', collapse)
  $('#listDisplay').on('click', '.deleteButton', deleteList)
  $('#listDisplay').on('submit', '#create-list', createList)
}

module.exports = {
  addHandlers
}
