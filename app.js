const express = require('express')
const router = require('./router')
const app = express()
const port = 3000

app.set('json spaces', 2);

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})