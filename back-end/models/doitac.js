const mongoose = require('mongoose')

const doitac= new mongoose.Schema({
    tendoitac:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    diachi:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('DoiTac',doitac)
