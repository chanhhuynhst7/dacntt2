const mongoose = require('mongoose')

const taikhoan = new mongoose.Schema({
   codecontainer:{
    type: String,
   },
   codepackage:{
    type: String
   },
   items:{
    type: Array,
   }
})

module.exports = mongoose.model('TaiKhoan',taikhoan)