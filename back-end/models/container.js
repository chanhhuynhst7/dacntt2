const mongoose = require('mongoose')

const container= new mongoose.Schema({
    codeorder:{
        type: String,
        required: true
    },
    codecontainer:{
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
