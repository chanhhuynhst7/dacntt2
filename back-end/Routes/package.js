const express = require("express");
const PK = require("../models/package");
const router = express.Router();

router.get("/", async (req, res) => {
  const pk = await PK.find({});
  res.status(200).json(pk);
  console.log(pk);
});

router.post("/create", async (req, res) => {
  const {
   codecontainer,
   codepackage
  } = req.body;
  if (
    codecontainer &&
    !codepackage
  ) {
    res.status(400).json({ message: "thieu thong tin" });
  }
  const pk = await PK.create({
    codecontainer,
    codepackage
  });
  res.status(200).json(pk);
});

router.get("/:codecontainer", async (req, res) => {
  try {
    const payload = req.params.codecontainer;
    const result = await PK.findById(payload);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(404).send({
      mesageCode: 404,
      mesage: "Container not found!",
    });
  }
});


  


module.exports = router;
