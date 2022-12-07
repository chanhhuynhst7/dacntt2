const mongoose=require('mongoose')

const importorder= new mongoose.Schema({
    idorder:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    idtransport:{
        type: String,
        required: true
    },
    idcontainer:{
        type: String,
        required: true
    },
    idpackage:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('ImportOrder',importorder)


