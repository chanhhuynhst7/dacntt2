const express = require('express');
const DT = require('../models/doitac')
const router = express.Router();

router.get('/', async (req, res) => {
    const dt = await DT.find({})
    res.status(200).json(dt)
    console.log(dt)
})

router.post('/', async(req, res)=>{
    const {name,code, email, located,phone} = req.body;
    if(!name || !code || !email || !located || !phone){
        console.log('thieu')
    }
    const dt =  await DT.create({
        name,
        code,
        email,
        located,
        phone
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
        name: req.body.name,
        code: req.body.code,
        email: req.body.email,
        located: req.body.located,
        phone: req.body.phone
    })
    res.status(200).json(dt)
   }
   else{
    res.status(400).json(dt)
   }
})

module.exports = router;


