'use strict'

const store = require('../store.js')
const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const listUi = require('../lists/ui.js')
const listApi = require('../lists/api.js')

const indexItem = () => {
  event.preventDefault()
  api.indexItem()
    .then(ui.indexItemSuccess)
    .catch(ui.error)
}

const showItem = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.showItem(form)
    .then(ui.showItemSuccess)
    .catch(ui.error)
}

const createItem = function (event) {
  event.preventDefault()
  const form = getFormFields(event.target)
  form.item.list = store.list.id
  api.createItem(form)
    // refreshes content after a successful create item
    .then((data) => listApi.showList(data.item.list))
    .then(listUi.showListSuccess)
    .catch(ui.error)
}

const updateItem = function (event) {
  event.preventDefault()
  const form = getFormFields(event.target)
  form.id = $(this).data('id')
  api.updateItem(form)
    // refreshes content after a successful update item
    .then((data) => listApi.showList(store.list.id))
    .then(listUi.showListSuccess)
    .then(ui.updateItemSuccess)
    .catch(ui.error)
}

const deleteItem = function (event) {
  event.preventDefault()
  api.deleteItem($(this).data('id'))
    // refreshes content after a successful create item
    .then((data) => listApi.showList(store.list.id))
    .then(listUi.showListSuccess)
    .then(ui.deleteItemSuccess)
    .catch(ui.error)
}

// ensures only one active link in navbar
const oneActive = function () {
  indexItem()
  $('#items').show()
  $('#settings').hide()
  $('#lists').hide()
  $('.navbar-collapse').removeClass('show')
}

const addHandlers = () => {
  $('#index-item').on('click', indexItem)
  $('#show-item').on('submit', showItem)
  $('#delete-item').on('submit', deleteItem)
  $('#items-link').on('click', oneActive)
  $('#listDisplay').on('click', '.deleteItemButton', deleteItem)
  $('#listDisplay').on('submit', '#update-item', updateItem)
  $('#listDisplay').on('submit', '#create-item', createItem)
}

module.exports = {
  addHandlers
}
