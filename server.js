'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)
const route = require('./network/routers')
const errors = require('./network/errors')
const db = require('./db')
const cors = require('cors')
const chalk = require('chalk')
const PORT = 3003

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
route(app)
app.use(cors())

db.connectionDb(app)

app.use(errors)

server.listen(PORT, function () {
  console.log(chalk.green('Server connected'))
})
console.log(chalk.green(`[App is listening]: http://localhost:${PORT}`))