'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const indexItem = () => {
  event.preventDefault()
  api.indexItem()
    .then(ui.indexItemSuccess)
    .catch(ui.error)
}

const showItem = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.showItem(form.id)
    .then(ui.showItemSuccess)
    .catch(ui.error)
}

const createItem = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.createItem(form)
    .then(ui.createItemSuccess)
    .catch(ui.error)
}

const updateItem = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.updateItem(form)
    .then(ui.updateItemSuccess)
    .catch(ui.error)
}

const deleteItem = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.deleteItem(form.id)
    .then(ui.deleteItemSuccess)
    .catch(ui.error)
}

const addHandlers = () => {
  $('#index-item').on('click', indexItem)
  $('#show-item').on('submit', showItem)
  $('#create-item').on('submit', createItem)
  $('#update-item').on('submit', updateItem)
  $('#delete-item').on('submit', deleteItem)
}

module.exports = {
  addHandlers
}
