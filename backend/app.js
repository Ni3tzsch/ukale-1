const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user', userRoutes)

module.exports = app
