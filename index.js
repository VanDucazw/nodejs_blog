const express = require('express')
var morgan = require('morgan')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
  
  app.use(morgan('combined'))

  return res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))