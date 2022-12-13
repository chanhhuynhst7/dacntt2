const express = require('express');
const SP = require('../models/sanpham')
const router = express.Router();


router.get('/', async (req, res) => {
    const sp = await SP.find({})
    res.status(200).json(sp)
    console.log(sp)
})
//thêm sản phẩm
//thay đường dẫn thành / addItem
router.post('/addItem', async(req, res)=>{
    const {tensanpham, soluong, nhasanxuat} = req.body;
    if(!tensanpham || !soluong || !nhasanxuat){
        console.log('thieu')
    }
    const sp =  await SP.create({
        tensanpham,
        soluong,
        nhasanxuat
    })
    res.status(200).json(sp)
})



//sửa sản phẩm
router.patch('/:id', async(req,res)=>{
    const sp = await SP.findOne({
        id : req.params.id
    })
    console.log(req.body)
   if(sp){
    const sp =await SP.updateOne({
        tensanpham: req.body.tensanpham,
        soluong: req.body.soluong,
        nhasanxuat: req.body.nhasanxuat
    })
    res.status(200).json(sp)
   }
   else{
    res.status(400).json({message : "Update Không Thành Công!!!"})
   }
})

//xóa sản phẩm
router.delete('/:id', async(req,res)=>{
    const sp = await SP.findOne({
        id : req.params._id
    })
    if(sp){
        const sp = await SP.deleteOne()
    }
    res.status(200).json('delete thành công')
})




module.exports = router;