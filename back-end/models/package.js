const mongoose = require('mongoose')

const package= new mongoose.Schema({
 codecontainer:{
    type: String,
    required: true,
 },
 codepackage:{
    type: String,
    required: true,
 }
    
})

module.exports = mongoose.model('Package',package)
