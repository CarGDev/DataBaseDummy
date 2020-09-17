module.exports = {
  remoteDB: process.env.REMOTE_DB || true,
  api: {
    port: process.env.API_PORT || 3000
  },
  jwt: {
    secret: process.env.JWT_SECRET || ''
  },
  mysql: {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DB || 'bloodstream'
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_PORT || 3336,
    host: process.env.MYSQL_SRV_HOST || ''
  }
}
