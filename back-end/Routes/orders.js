const express = require('express');
const OD = require('../models/ImportOrder')
const router = express.Router();

router.get('/', async (req, res) => {
    const od = await OD.find({})
    res.status(200).json(od)
    console.log(od)
})

router.post('/create', async(req, res)=>{
    const {idorder, from, to,idtransports,idcontainer,idpackage} = req.body;
    if(!idorder || !from || !to || !idtransports || !idcontainer, idpackage || !idpackage){
        res.status(400).json({message : 'thieu thong tin'})
    }
    const od =  await OD.create({
        idorder,
        from,
        to,
        idtransports,
        idcontainer,
        idpackage
    })
    res.status(200).json(od)
    
})

module.exports = router;
