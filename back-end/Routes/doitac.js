const express = require('express');
const DT = require('../models/doitac')
const router = express.Router();

router.get('/', async (req, res) => {
    const dt = await DT.find({})
    res.status(200).json(dt)
    console.log(dt)
})

router.post('/', async(req, res)=>{
    const {tendoitac, email, diachi} = req.body;
    if(!tendoitac || !email || !diachi){
        console.log('thieu')
    }
    const dt =  await DT.create({
        tendoitac,
        email,
        diachi
    })
    res.status(200).json(dt)
})

router.patch('/:id', async(req,res)=>{
    const dt = await DT.findOne({
        id : req.params.id
    })
    console.log(req.body)
   if(dt){
    const dt =await DT.updateOne({
        tendoitac: req.body.tendoitac,
        email: req.body.email,
        diachi: req.body.diachi
    })
    res.status(200).json(dt)
   }
   else{
    res.status(400).json(dt)
   }
})

module.exports = router;


