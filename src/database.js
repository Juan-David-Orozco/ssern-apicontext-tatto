const sql = require('mssql')
const { MSSQL } = require('./config')

const dbConfig = {
  user: MSSQL.user,
  password: MSSQL.password,
  database: MSSQL.dbname,
  server: MSSQL.dbhost,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
}

const connectDB = async () => {
  try {
    const pool = await sql.connect(dbConfig)
    return pool
  } catch (error) {
    console.log(error)
  }
}

module.exports = { connectDB, sql }