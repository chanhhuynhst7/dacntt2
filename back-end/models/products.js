const mongoose = require('mongoose')
//thiếu mã sản phẩm
const product= new mongoose.Schema({
    nameproduct:{
        type: String,
        required: true
    },
    codeproduct:{
        type: String,
        required : true
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




module.exports = mongoose.model('Products',product)
