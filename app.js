const express = require('express')
const analyticsRouts = require('./routes/analytics')
const authRouts = require('./routes/auth')
const categoryRouts = require('./routes/category')
const orderRouts = require('./routes/order')
const positionRouts = require('./routes/position')
const app = express()

app.use('/api/analytics', analyticsRouts)
app.use('/api/auth', authRouts)
app.use('/api/category', categoryRouts)
app.use('/api/order', orderRouts)
app.use('/api/position', positionRouts)

module.exports = app