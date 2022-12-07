const mongoose = require('mongoose')

const container= new mongoose.Schema({
    idcontainer:{
        type: String,
        required: true
    },
    idorder:{
        type: String,
        required: true
    },
    host:{
        type: String,
        required: true
    },
    located:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Container',container)
