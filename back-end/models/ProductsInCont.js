const mongoose = require('mongoose')

const productsInCont= new mongoose.Schema({
   nameproduct:{
    type: String,
   },
   amount:{
    type: Number,
   }
})


module.exports = mongoose.model('ProductsInCont',productsInCont)
