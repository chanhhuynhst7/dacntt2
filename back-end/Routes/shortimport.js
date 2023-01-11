const express = require('express')
const router = express.Router();

const SIP = require("../models/shortimport")



router.get("/", async (req, res) => {
    try {
      const sip = await SIP.find({});
      res.status(200).json(sip);
    } catch (error) {
      res.status(404).send({
        mesageCode: 404,
        mesage: "short import  not found!",
      });
    }
  });
  
  
  
  router.post("/create", async (req, res) => {
    try {
      const { codeimport,from, to,codevehicle,details } = req.body;
      console.log("--//--  req.body   ----  ", req.body);
      if (codeimport,from && to && codevehicle && details) {
        console.log("thieu");
        const dt = await SIP.create({
          codeimport,
          from,
          to,
          codevehicle,
          details
        });
        res.status(200).send({ mesage: "create import success" });
      }
    } catch (error) {
      res.status(400).send({
        mesageCode: 400,
        mesage: "invalid key",
      });
    }
});

module.exports = router;
