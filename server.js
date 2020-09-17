'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')
const app = express()
const server = require('http').Server(app)
const route = require('./network/routers')
const config = require('./config')
const errors = require('./network/errors')
const db = require('./db')
const cors = require('cors')
const chalk = require('chalk')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const swaggerDoc = require('./swagger.json')

route(app)
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

db.connectionDb(app)

app.use(errors)

server.listen(config.api.port, function () {
  console.log(chalk.green('Server connected'))
  console.log(chalk.green(`[App is listening]: http://localhost:${config.api.port}`))
})