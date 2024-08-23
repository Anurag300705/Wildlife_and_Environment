const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()


const app = express()
//middlewares
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(bodyParser.json());
//cors
app.use(cors())
//dotenv
const port = process.env.PORT || 5001
const db = process.env.DB
//mongoose
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected to the database') })
    .catch(err => { console.log('Database connection error...', err) })

app.get('/', (req, res) => {
    res.send('Hello')
})
app.use('/login2', require('./routes/user')
)



app.listen(port, () => {
    console.log(`Backend in running at ${port}`)
})