'use strict'
const express = require('express')
const compression = require('compression')
const path = require('path')
const PORT = 8000

const app = express()

app.use(express.static('public'))
app.use(compression())

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.listen(PORT, () => {
  console.log('listing on', PORT)
})
