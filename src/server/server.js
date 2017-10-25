import express from 'express'
import morgan from 'morgan'
import path from 'path'
// import indexRouter from './routers/index'

var bodyParser = require('body-parser')

let app = express()

// serve static files
app.use(express.static('dist'))

app.use(morgan('combined'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(indexRouter)

app.get('/', (req,res)=>{
  res.sendFile(path.resolve('src/client/index.html'))
})

app.listen(3023, function () {
  console.log('Listening on port 3023')
})
