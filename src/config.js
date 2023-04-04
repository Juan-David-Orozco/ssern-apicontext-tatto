require('dotenv').config()

const PORT = process.env.PORT || 4000

const MSSQL = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dbname: process.env.DB_NAME,
  dbhost: process.env.DB_HOST
}

module.exports = { PORT, MSSQL }