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
  
  router.post("/create", async (req, res) => {
    try {
      const { codeorder, codecontainer, host, located } = req.body;
      console.log("--//--  req.body   ----  ", req.body);
      if (codeorder && codecontainer && host && located) {
        console.log("thieu");
        const ct = await CT.create({
          codeorder,
          codecontainer,
          host,
          located,
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
module.exports = router;
