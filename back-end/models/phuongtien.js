const mongoose = require('mongoose')

const phuongtien= new mongoose.Schema({
    idphuongtien:{
        type: String,
        required: true
    },
    loaiphuongtien:{
        type: String,
        required: true
    },
    doitac:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('PhuongTien',phuongtien)
