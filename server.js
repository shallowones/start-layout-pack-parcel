const express = require('express')
const path = require('path')

const PORT = 7000

const app = express()

/* app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/pages/index.html'))
}) */

// express.static('./dist')

app.use('/', express.static(__dirname + '/build'));

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})
