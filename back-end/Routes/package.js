const express = require("express");
const PK = require("../models/package");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pk = await PK.find({});
    res.status(200).json(pk);
  } catch (error) {
    res.status(404).send({
      mesageCode: 404,
      mesage: "Container not found!",
    });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { codepackage } = req.body;
    console.log("--//--  req.body   ----  ", req.body);
    if (codepackage ) {
      console.log("thieu");
      const pk = await PK.create({
        codepackage,
      });
      res.status(200).send({ mesage: "create package success" });
    }
  } catch (error) {
    res.status(400).send({
      mesageCode: 400,
      mesage: "invalid key",
    });
  }
});



  


module.exports = router;
