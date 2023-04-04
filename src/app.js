const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const pkg = require('../package.json')
const { PORT } = require('./config')

// Initialization
const app = express()

// Settings
app.set('port', PORT)
app.set('pkg', pkg)

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Main API Route
app.get('/api', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
})

// Static files
app.use(express.static(path.join(__dirname, '../client/build')))

module.exports = app