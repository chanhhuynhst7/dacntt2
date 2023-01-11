const mongoose = require('mongoose')

const detail =  new mongoose.Schema({
    codecontainer:{
        type: String,
    },
    codepackage:{
        type: String,
    },
    products: [{
        nameproduct:{
            type: String,
        },
        amount:{
            type: Number,
        }
    }]
})

module.exports = mongoose.model('Detail',detail)