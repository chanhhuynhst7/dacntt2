const mongoose=require('mongoose')

const xuatdonhang= new mongoose.Schema({
    iddonhang:{
        type: String,
        required: true
    },
    tu:{
        type: String,
        required: true
    },
    den:{
        type: String,
        required: true
    },
    idphuongtien:{
        type: String,
        required: true
    },
    idcontainer:{
        type: String,
        required: true
    },
    idsanpham:{
        type: String,
        required: true
    },
    tensanpham:{
        type: String,
        required: true
    },
    soluong:{
        type:String,
        required: true
    },
    donvi:{
        type: String,
        required: true
    },
    nhasanxuat:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('XuatDonHang',xuatdonhang)
