const mongoose = require('mongoose')

const nhasanxuat= new mongoose.Schema({
    name:{
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
        required :true
    },
    taxcode:{
        type: String,
        required : true
    }
})

module.exports = mongoose.model('NhaSanXuat',nhasanxuat)
