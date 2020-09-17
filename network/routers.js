const express = require('express')
const user = require('../components/user/network')
const message = require('../components/message/network')
const gameCollection = require('../components/gameCollection/network')
const lenguages = require('../components/lenguages/network')
const games = require('../components/games/network')
const platforms = require('../components/platforms/network')
const genre = require('../components/genre/network')
const gamesRating = require('../components/gamesRating/network')
const contact = require('../components/contact/network')
const accessRol = require('../components/accessRol/network')

const routes = function (server) {
  server.use('/users', user)
  server.use('/messages', message)
  server.use('/gamescollection', gameCollection)
  server.use('/lenguages', lenguages)
  server.use('/games', games)
  server.use('/platforms', platforms)
  server.use('/genre', genre)
  server.use('/gamesRating', gamesRating)
  server.use('/contact', contact)
  server.use('/accessrol', accessRol)
}

module.exports = routes