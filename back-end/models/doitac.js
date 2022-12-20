const mongoose = require('mongoose')

const doitac= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    located:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('DoiTac',doitac)
