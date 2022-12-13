const express = require('express');
const IIP = require('../models/ItemInPackage')
const router = express.Router();

router.get('/', async (req, res) => {
    const iip = await IIP.find({})
    res.status(200).json(iip)
    console.log(iip)
})

router.post('/create', async(req, res)=>{
    const {codeorder,codecontainer,codepackage,codeitem,name , amount,units,codeproducer} = req.body;
    if(!!codeorder || !!codecontainer || !codepackage || !codeitem || !name || !amount || units || codeproducer){
        console.log('thieu')
    }
    const iip =  await IIP.create({
        codeorder,
        codecontainer,
        codepackage,
        codeitem,
        name,
        amount,
        units,
        codeproducer
    })
    res.status(200).json(iip)
})



module.exports = router;