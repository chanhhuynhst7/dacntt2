const express = require('express');
const NDH = require('../models/nhapdonhang')
const router = express.Router();

router.get('/', async (req, res) => {
    const ndh = await NDH.find({})
    res.status(200).json(ndh)
    console.log(ndh)
})


router.post('/', async(req, res)=>{
    const {iddonhang, tu, den,idphuongtien,idcontainer,idsanpham,tensanpham,soluong,donvi,nhasanxuat} = req.body;
    if(!iddonhang || !tu || !den || idphuongtien || idcontainer || idsanpham || tensanpham || soluong || donvi || nhasanxuat){
        console.log('thieu')
    }
    const ndh =  await NDH.create({
        iddonhang,
        tu,
        den,
        idphuongtien,
        idcontainer,
        idsanpham,
        tensanpham,
        soluong,
        donvi,
        nhasanxuat,
        idcontainer
    })
    res.status(200).json(ndh)
})

module.exports = router;

