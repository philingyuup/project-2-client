'use strict'

const store = require('../store.js')
const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const itemApi = require('../items/api.js')
const itemUi = require('../items/ui.js')

const indexList = () => {
  event.preventDefault()
  api.indexList()
    .then(ui.indexListSuccess)
    .catch(ui.error)
}

const showList = function (event) {
  event.preventDefault()
  oneActive()
  api.showList($(this).data('id'))
    .then(ui.showListSuccess)
    .catch(ui.error)
}

const createList = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.createList(form)
    .then(ui.createListSuccess)
    .catch(ui.error)
}

const updateList = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.updateList(form)
    .then(ui.updateListSuccess)
    .catch(ui.error)
}

const deleteList = function (event) {
  api.deleteList($(this).data('id'))
    .then(ui.deleteListSuccess)
    .catch(ui.error)
}

const oneActive = function () {
  indexList()
  $('#lists').show()
  $('#settings').hide()
  $('#items').hide()
  $('.navbar-collapse').removeClass('show')
}

const reduceOne = function (event) {
  event.preventDefault()
  const num = $(this).data('quantity')
  const data = {
    'id': $(this).data('id'),
    'item': {
      'quantity': num - 1
    }
  }
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
