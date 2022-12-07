const express = require('express');
const IIP = require('../models/ItemInPackage')
const router = express.Router();

router.get('/', async (req, res) => {
    const iip = await IIP.find({})
    res.status(200).json(iip)
    console.log(iip)
})

router.post('/create', async(req, res)=>{
    const {iditeminpackage,idpackage,name , amount,units,idproducers} = req.body;
    if(!iditeminpackage || !idpackage || !name || !amount || units || idproducers){
        console.log('thieu')
    }
    const iip =  await IIP.create({
        iditeminpackage,
        idpackage,
        name,
        amount,
        units,
        idproducers
    })
    res.status(200).json(iip)
})



module.exports = router;