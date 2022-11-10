const mongoose = require('mongoose')

const nhasanxuat = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    diachi:{
        type: String,
        required: true
    }
})

module.export = mongoose.model('NhaSanXuat',nhasanxuat)
