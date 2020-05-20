'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexList = () => {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showList = id => {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createList = data => {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const updateList = data => {
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteList = id => {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  indexList,
  showList,
  createList,
  updateList,
  deleteList
}
