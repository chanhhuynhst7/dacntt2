const mongoose = require('mongoose');

const shortimport = new mongoose.Schema({
    from:{
        type: String,
    },
    to:{
        type: String,
    },
    codevehicle:{
        type: String,
    },
    details:[{
        codecontainer:{
            type: String 
        },
        codepackage:{
            type: String
        },
        products:[{
            nameproduct:{
                type: String
            },
            amount: {
                type: Number
            }
        }]

    }]
    
})