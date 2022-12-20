const express = require('express');
const  SX = require('../models/nhasanxuat')
const router = express.Router();

router.get('/', async (req, res) => {
    const sx = await SX.find({})
    res.status(200).json(sx)
    console.log(sx)
})

router.post('/', async(req, res)=>{
    const {name, email, located,phone,taxcode} = req.body;
    if(!name || !email || !located || !phone || !taxcode){
        console.log('thieu')
    }
    const sx =  await SX.create({
        name,
        email,
        located,
        phone,
        taxcode
    })
    res.status(200).json(sx)
})

router.patch('/:id', async(req,res)=>{
    const sx = await SX.findOne({
        id : req.params.id
    })
    console.log(req.body)
   if(sx){
    const sx =await SX.updateOne({
        name: req.body.name,
        email: req.body.email,
        located: req.body.located,
        phone: req.body.phone,
        taxcode: req.body.taxcode
    })
    res.status(200).json(sx)
   }
   else{
    res.status(400).json(sx)
   }
})

module.exports = router;


