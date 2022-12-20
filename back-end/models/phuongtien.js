const mongoose = require('mongoose')

const phuongtien= new mongoose.Schema({
    code:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    host:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('PhuongTien',phuongtien)
