'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('form').trigger('reset')
  $('#signUpModal').modal('hide')
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
  $('.navButton').show()
  $('.nav-link').show()
  $('#sign-in-section').hide()
}

const changePasswordSuccess = (data) => {
  $('form').trigger('reset')
  $('#message').text('Change Password Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signOutSuccess = () => {
  delete store.user
  delete store.list
  $('#message').text('Sign Out Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#listDisplay').html('')
  $('.unauthenticated').hide()
  $('.navbar-collapse').removeClass('show')
  $('#sign-in-section').show()
}

module.exports = {
  error,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
