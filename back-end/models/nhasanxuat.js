const mongoose = require('mongoose')

const nhasanxuat= new mongoose.Schema({
    tennhasanxuat:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    diachi:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('NhaSanXuat',nhasanxuat)
