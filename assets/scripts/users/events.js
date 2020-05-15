'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('../store.js')

const signUp = (event) => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.signUp(form)
    .then(ui.signUpSuccess)
    .catch(ui.error)
}

const signIn = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.signIn(form)
    .then(ui.signInSuccess)
    .catch(ui.error)
}

const changePassword = event => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.changePassword(form)
    .then(ui.changePasswordSuccess)
    .catch(ui.error)
}

const signOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.error)
}

const addHandlers = () => {
  $('#sign-up').on('submit', signUp)
  $('#sign-in').on('submit', signIn)
  $('#change-password').on('submit', changePassword)
  $('#sign-out').on('click', signOut)
}

module.exports = {
  addHandlers
}
