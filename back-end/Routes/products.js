const express = require('express');
const SP = require('../models/sanpham')
const router = express.Router();


router.get('/', async (req, res) => {
    const sp = await SP.find({})
    res.status(200).json(sp)
    console.log(sp)
})

router.post('/', async(req, res)=>{
    const {tensanpham, soluong, nhasanxuat} = req.body;
    if(!tensanpham || !soluong || !nhasanxuat){
        console.log('thieu')
    }
    const sp =  await SP.create({
        tensanpham,
        soluong,
        nhasanxuat
    })
    res.status(200).json(sp)
})

module.exports = router;