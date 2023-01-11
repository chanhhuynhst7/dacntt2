const express = require('express');
const PIC = require('../models/ProductsInCont')
const router = express.Router();

router.get('/', async (req, res) => {
    const pic = await PIC.find({})
    res.status(200).json(pic)
    console.log(pic)
})

router.post('/create', async(req, res)=>{
    const {nameproduct , amount} = req.body;
    if(  nameproduct && !amount ){
        console.log('thieu')
    }
    const pic =  await PIC.create({
        nameproduct,
        amount,
    })
    res.status(200).json(pic)
})



module.exports = router;