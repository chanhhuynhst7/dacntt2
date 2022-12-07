const express = require('express');
const CT = require('../models/container')
const router = express.Router();

router.get('/', async (req, res) => {
    const ct = await CT.find({})
    res.status(200).json(ct)
    console.log(ct)
})

router.post('/create', async(req, res)=>{
    const {idcontainer, host, located,idpackage} = req.body;
    if(!idcontainer || !host || !located || idpackage){
        console.log('thieu')
    }
    const ct =  await CT.create({
        idcontainer,
        host,
        located,
        idpackage
    })
    res.status(200).json(ct)
})

module.exports = router;
