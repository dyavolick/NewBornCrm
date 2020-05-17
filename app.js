const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const analyticsRouts = require('./routes/analytics')
const authRouts = require('./routes/auth')
const categoryRouts = require('./routes/category')
const orderRouts = require('./routes/order')
const positionRouts = require('./routes/position')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI)
    .then(()=>console.log('MongoDB connected.'))
    .catch(error=>console.log(error))
app.use(passport.initialize())
require('./midldleware/passport')(passport)

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