const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
const app = express()
app.use(cors())
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
