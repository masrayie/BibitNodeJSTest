const axios = require('axios')

const express = require('express')

const movieRouter = require('./router/movies-router')
const apicallRouter = require('./router/apilog-router')

const util = require('util')

const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

app.use('/movies', movieRouter)
app.use('/api', apicallRouter)

app.listen(port, () => {
    console.log('Server is up on port', port)
})