const mongoose = require('mongoose')

const iteminpackage= new mongoose.Schema({
    iditeminpackage:{
        type: String,
        required: true
    },
    idpackage:{
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
    },
    units:{
        type: String,
        required: true
    },
    idproducers:{
        type: String,
        required: true
    }

})


module.exports = mongoose.model('IteminPackage',iteminpackage)
