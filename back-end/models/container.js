const mongoose = require('mongoose')

const container= new mongoose.Schema({
    codecontainer:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Container',container)
