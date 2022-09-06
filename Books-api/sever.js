require('dotenv').config()
const express = require('express')
var app = express()
const mongoose = require('mongoose')
const TT = require('../models/models')
// const PORT = process.env.PORT
app.use(express.json())
mongoose.connect(process.env.MONGO_URI, {family:4}, function(err, connection) {
  console.log('connected to DB!!!!!!!!')
});


app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')

app.get('/', (req, res) => {
  res.send('Hello, world!')
})


app.get('/books', (req, res) => {
  res.send('Books!!!!!!!!!!!!!!!')
  
})





app.listen(3000)
