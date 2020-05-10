const express = require('express')
const authRouts = require('./routes/auth')
const app = express()

app.use('/api/auth', authRouts)

module.exports = app