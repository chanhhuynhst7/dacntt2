const mongoose = require('mongoose')
//thiếu mã sản phẩm
const sanpham= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    codeitem:{
        type: String,
        required : true
    },
    amount:{
        type: String,
        required: true
    },
    producer:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    }
})




module.exports = mongoose.model('SanPham',sanpham)
