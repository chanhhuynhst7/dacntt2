const express = require('express');

const router = express.Router();

const DT = require('../models/detail')


router.get("/", async (req, res) => {
    try {
      const dt = await DT.find({});
      res.status(200).json(dt);
    } catch (error) {
      res.status(404).send({
        mesageCode: 404,
        mesage: "Container not found!",
      });
    }
  });
  
  
  
  router.post("/create", async (req, res) => {
    try {
      const { codecontainer, codepackage,products } = req.body;
      console.log("--//--  req.body   ----  ", req.body);
      if (codecontainer && codepackage && products) {
        console.log("thieu");

        const dt = await DT.create({
          codecontainer,
          codepackage,
          products,
        
        
        });
        res.status(200).send({ mesage: "create Detail success" });
      }
    } catch (error) {
      res.status(400).send({
        mesageCode: 400,
        mesage: "invalid key",
      });
    }
});


module.exports = router;
