const express= require('express');
const PT = require('../models/phuongtien');
const router = express.Router();

router.get('/', async (req, res) => {
    const pt = await PT.find({})
    res.status(200).json(pt)
    console.log(pt)
})

router.post('/', async(req, res)=>{
    const {codevehicle, type, host} = req.body;
    if(!codevehicle || !type || !host){
        console.log('thieu')
    }
    const pt =  await PT.create({
        codevehicle,
        type,
        host
    })
    res.status(200).json(pt)
})

module.exports = router;


