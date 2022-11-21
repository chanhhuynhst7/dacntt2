const express = require('express');
const XDH = require('../models/xuatdonhang')
const router = express.Router();

//hiển thị đơn hàng
router.get('/', async (req, res) => {
    const xdh = await XDH.find({})
    res.status(200).json(xdh)
    console.log(xdh)
})

//view đơn hàng
router.get('/:id', async (req,res) =>{
    const xdh = XDH.findOne({
        id : req.params.id
    })
    if(!xdh){
        res.status(400).json({message : 'View Không Thành Công'})
    }
    else{
        res.status(200).json(xdh)
    }
})


//tạo đơn hàng
router.post('/', async(req, res)=>{
    const {iddonhang, tu, den,idphuongtien,idcontainer,idsanpham,tensanpham,soluong,donvi,nhasanxuat} = req.body;
    if(!iddonhang || !tu || !den || idphuongtien || idcontainer || idsanpham || tensanpham || soluong || donvi || nhasanxuat){
        console.log('thieu')
    }
    const xdh =  await XDH.create({
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
    res.status(200).json(xdh)
})

//update đơn hàng
router.patch('/:id', async(req,res)=>{
    const xdh = await XDH.findOne({
        id : req.params.id
    })
    console.log(req.body)
  if(!xdh){
    res.status(400).json({message: 'Update Không Thành Công'})
  }
  else{
    const xdh = await XDH.updateOne({
        iddonhang: req.body.iddonhang,
        tu: req.body.tu,
        den: req.body.den,
        idphuongtien: req.body.idphuongtien,
        idcontainer: req.body.idcontainer,
        idsanpham: req.body.idsanpham,
        tensanpham: req.body.tensanpham,
        soluong: req.body.soluong,
        donvi: req.body.donvi,
        nhasanxuat: req.body.nhasanxuat,
        idcontainer: req.body.idcontainer
    })
    res.status(200).json(xdh)
  }
})

//delete đơn hàng, chưa làm xong



module.exports = router;

