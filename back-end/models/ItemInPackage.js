const mongoose = require('mongoose')

const iteminpackage= new mongoose.Schema({
    codecontainer:{
        type: String,
        required : true
    },
    codepackage:{
        type: String,
        required: true
    },
    codeitem:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    amount:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('IteminPackage',iteminpackage)
