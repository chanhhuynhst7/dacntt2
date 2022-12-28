const mongoose=require('mongoose')

const importorder= new mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ImportOrder',importorder)


