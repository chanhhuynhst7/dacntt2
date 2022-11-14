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

module.exports = router;


