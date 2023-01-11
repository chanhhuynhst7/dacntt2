const mongoose = require('mongoose')

const package= new mongoose.Schema({
 codepackage:{
    type: String,
    required: true,
 },
    
})

module.exports = mongoose.model('Package',package)
