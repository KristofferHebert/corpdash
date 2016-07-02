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

app.get('/geo', function (req, res) {
  res.sendFile(__dirname + '/public/geo.csv')
})

app.get('/data', function (req, res) {
  res.sendFile(__dirname + '/public/data.csv')
})

app.get('/metrics', function (req, res) {
  res.sendFile(__dirname + '/public/metrics.json')
})

app.get('/reported', function (req, res) {
  res.sendFile(__dirname + '/public/reported.json')
})

app.listen(PORT, () => {
  console.log('listing on', PORT)
})
