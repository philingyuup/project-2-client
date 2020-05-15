'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('form').trigger('reset')
  $('#message').text('Sign Up Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const error = (err) => {
  $('#message').text(`${err.responseJSON.status} error: ${err.responseJSON.message}`)
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signInSuccess = (data) => {
  Object.assign(store, data)
  $('form').trigger('reset')
  $('#message').text('Sign In Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const changePasswordSuccess = (data) => {
  $('form').trigger('reset')
  $('#message').text('Change Password Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signOutSuccess = () => {
  delete store.user
  $('#message').text('Sign Out Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

module.exports = {
  error,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
