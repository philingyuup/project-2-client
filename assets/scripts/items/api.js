'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexItem = () => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
//
// const showItem = id => {
//   return $.ajax({
//     url: config.apiUrl + '/items/' + id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

const createItem = data => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const updateItem = data => {
  return $.ajax({
    url: config.apiUrl + '/items/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteItem = id => {
  return $.ajax({
    url: config.apiUrl + '/items/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  indexItem,
  // showItem,
  createItem,
  updateItem,
  deleteItem
}
