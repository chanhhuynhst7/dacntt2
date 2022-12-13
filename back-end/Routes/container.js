const express = require('express');
const CT = require('../models/container')
const router = express.Router();

router.get('/', async (req, res) => {
    const ct = await CT.find({})
    res.status(200).json(ct)
    console.log(ct)
})

router.get('/codecontainer', async(req,res) =>{
    const ct = await CT.find({
        codeorder : req.body.codeorder
    })
    if(ct){
        res.send(ct);    
    }else{

        res.status(404).send({mesage:"container not found!"})
    }
})


router.post('/create', async(req, res)=>{
    const {codeorder,codecontainer, host, located,} = req.body;
    if(!codeorder || !codecontainer || !host || !located){
        console.log('thieu')
    }
    const ct =  await CT.create({
        codeorder,
        codecontainer,
        host,
        located,
    })
    res.status(200).json(ct)
})

module.exports = router;
