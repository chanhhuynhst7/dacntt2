const mongoose = require('mongoose')

const package= new mongoose.Schema({
    idpackage:{
        type: String,
        
    },
    idorder:{
        type: String,
        
    },
    idcontainer:{
        type: String,
       
    },
    host:{
        type: String,
        
    },
    located:{
        type: String,
        
    }, 
    items:[
        {id:{
            type: String,
            required :true
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
        }}
    ]
        


    
})

module.exports = mongoose.model('Package',package)
