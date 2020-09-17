'use strict'

require('dotenv').config()
const db = require('mysql')
const chalk = require('chalk')
const { ENV, DBHOST, DBUSER, DBPASSWORD, DBDATABASE } = process.env
const development = 'development'
const config = require('./config')
const PORT = config.api.port

const connection = db.createConnection({
  host: DBHOST,
  user: DBUSER,
  password: DBPASSWORD,
  database: DBDATABASE
})

function connectionDb (app) {
  connection.connect(function (err) {
    if (err) throw err
    console.log(chalk.green('Database server is running'))
  })

  if (ENV === development) {
    console.log('Development config')
  }

  app.listen(PORT, (err) => {
    if (err) throw err
    console.log(chalk.green(`Server running on port ${PORT}`))
  })
}

module.exports = {
  connectionDb
}
