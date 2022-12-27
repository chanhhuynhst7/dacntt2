const express = require('express');
const IIP = require('../models/ItemInPackage')
const router = express.Router();

router.get('/', async (req, res) => {
    const iip = await IIP.find({})
    res.status(200).json(iip)
    console.log(iip)
})

router.post('/create', async(req, res)=>{
    const {codecontainer,codepackage,codeitem,name , amount} = req.body;
    if( codecontainer && codepackage && !codeitem && !name && !amount ){
        console.log('thieu')
    }
    const iip =  await IIP.create({
        codecontainer,
        codepackage,
        codeitem,
        name,
        amount,
    })
    res.status(200).json(iip)
})



module.exports = router;