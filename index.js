const express = require('express')
const app = express()
const port = 3000

const connection = require("./db/connection");
connection()

const userRouter = require('./routes/user')
app.use(userRouter)

const categoryRouter= require('./routes/category');
app.use(categoryRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})