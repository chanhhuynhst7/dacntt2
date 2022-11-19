const mongoose = require('mongoose')
//thiếu mã sản phẩm
const sanpham= new mongoose.Schema({
    tensanpham:{
        type: String,
        required: true
    },
    soluong:{
        type: String,
        required: true
    },
    nhasanxuat:{
        type: String,
        required: true
    }
})




module.exports = mongoose.model('SanPham',sanpham)
