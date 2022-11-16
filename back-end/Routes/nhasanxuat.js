const express = require('express');
const  SX = require('../models/nhasanxuat')
const router = express.Router();

router.get('/', async (req, res) => {
    const sx = await SX.find({})
    res.status(200).json(sx)
    console.log(sx)
})

router.post('/', async(req, res)=>{
    const {tennhasanxuat, email, diachi} = req.body;
    if(!tennhasanxuat || !email || !diachi){
        console.log('thieu')
    }
    const sx =  await SX.create({
        tennhasanxuat,
        email,
        diachi
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
        tennhasanxuat: req.body.tennhasanxuat,
        email: req.body.email,
        diachi: req.body.diachi
    })
    res.status(200).json(sx)
   }
   else{
    res.status(400).json(sx)
   }
})

module.exports = router;


