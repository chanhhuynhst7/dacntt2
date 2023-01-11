const express = require('express');
const CT = require('../models/container')
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const ct = await CT.find({});
      res.status(200).json(ct);
    } catch (error) {
      res.status(404).send({
        mesageCode: 404,
        mesage: "Container not found!",
      });
    }
  });
  
  
  
  router.post("/create", async (req, res) => {
    try {
      const { codecontainer, type, length,width, height, volume , color , host } = req.body;
      console.log("--//--  req.body   ----  ", req.body);
      if (codecontainer && type && width && height && volume && color && host ) {
        console.log("thieu");
        const ct = await CT.create({
          codecontainer,
          type,
          width,
          length,
          height,
          volume,
          color,
          host,
        });
        res.status(200).send({ mesage: "create container success" });
      }
    } catch (error) {
      res.status(400).send({
        mesageCode: 400,
        mesage: "invalid key",
      });
    }
  });

  router.get("/:codecontainer", async (req, res) => {
    try {
      const payload = req.params.codecontainer;
      const result = await CT.findById(payload);
      res.status(200).send({ data: result });
    } catch (error) {
      res.status(404).send({
        mesageCode: 404,
        mesage: "Container not found!",
      });
    }
  });
module.exports = router;
