const express= require('express');
const PT = require('../models/phuongtien');
const router = express.Router();

router.get('/', async (req, res) => {
    const pt = await PT.find({})
    res.status(200).json(pt)
    console.log(pt)
})

router.post('/', async(req, res)=>{
    const {code, type, host} = req.body;
    if(!code || !type || !host){
        console.log('thieu')
    }
    const pt =  await PT.create({
        code,
        type,
        host
    })
    res.status(200).json(pt)
})

module.exports = router;


