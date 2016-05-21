'use strict'
const express = require('express')
const path = require('path')
const PORT = 8000

const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, '/public/index.html'))
})
app.listen(PORT, () => {
  console.log('listing on', PORT)
})
