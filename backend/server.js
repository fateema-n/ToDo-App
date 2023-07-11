const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config() //allows us to have a  dontenv file with all our variables in it
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.PORT || 8000

connectDB()

const app = express()

// middleware to use body data
app.use(express.json()) //.json() -> body parser for raw json
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalroutes'))

app.use(errorHandler)

app.listen(port, () => 
    console.log(`Server started on port ${port}`)
)