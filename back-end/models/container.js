const mongoose = require('mongoose')

const container= new mongoose.Schema({
    codecontainer:{
        type: String,
        required: true
    },
    type:{
        type: String,
    },
    length:{
        type: Number
    },
    width:{
        type: Number,
    },
    height:{
        type: Number,
    },
    volume:{
        type: Number,
    },
    color:{
        type: String,
    },
    host:{
        type: String,
    }
})

module.exports = mongoose.model('Container',container)
