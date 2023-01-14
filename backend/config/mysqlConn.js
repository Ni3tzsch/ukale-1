const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.DB,
  port: process.env.MYSQL_PORT,
})

module.exports = connection
