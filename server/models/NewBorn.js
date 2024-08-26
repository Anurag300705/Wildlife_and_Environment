const mongoose = require('mongoose')

const newBornSchema = mongoose.Schema({
    species: {
        type: String,
        required: true
    },
    birth: {
        type: Number,
        required: true
    }
})

const NewBorn = mongoose.model('NewBorn', newBornSchema)
module.exports = NewBorn