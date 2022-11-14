const mongoose = require('mongoose')

const phuongtien= new mongoose.Schema({
    IDphuongtien:{
        type: String,
        required: true
    },
    loaiphuongtien:{
        type: String,
        required: true
    },
    nhasanxuat:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Phuong Tien',phuongtien)
