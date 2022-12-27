const express = require('express');
const TF = require('../models/testform')
const router = express.Router();

router.post('/create', async(req, res)=>{
    const {container,transports} = req.body;
    if(container && transports){
       
        const tf =  await TF.create({
            container,
            transports,
        })
        res.status(200).json(tf)

    }
})

module.exports = router;