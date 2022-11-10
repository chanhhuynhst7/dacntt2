const mongoose = require('mongoose')

const taikhoan = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true
    }
})