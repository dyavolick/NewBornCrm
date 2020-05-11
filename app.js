const express = require('express')
const bodyParser = require('body-parser')
const analyticsRouts = require('./routes/analytics')
const authRouts = require('./routes/auth')
const categoryRouts = require('./routes/category')
const orderRouts = require('./routes/order')
const positionRouts = require('./routes/position')
const app = express()

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(require('cors')())


app.use('/api/analytics', analyticsRouts)
app.use('/api/auth', authRouts)
app.use('/api/category', categoryRouts)
app.use('/api/order', orderRouts)
app.use('/api/position', positionRouts)

module.exports = app