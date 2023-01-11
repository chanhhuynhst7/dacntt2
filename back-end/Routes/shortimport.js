const express = require('express')
const router = express.Router();

const SIP = require('../models/shortimport')



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
      const { from,to,codevehicle , details} = req.body;
      console.log("--//--  req.body   ----  ", req.body);
      if (from, to ,codevehicle , details ) {
        console.log("thieu");
        const sip = await SIP.create({
          from,
          to,
          codevehicle,
          details
        });
        res.status(200).send({ mesage: "create short import success" });
      }
    } catch (error) {
      res.status(400).send({
        mesageCode: 400,
        mesage: "invalid key",
      });
    }
  });