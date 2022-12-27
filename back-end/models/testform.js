const mongoose = require('mongoose')

const testform = new mongoose.Schema({
    
    container:{
        type: String,
        required: true
    },
    transports:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('TestForm',testform)