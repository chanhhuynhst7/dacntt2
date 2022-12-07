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
    idpackage,
    idorder,
    idcontainer,
    host,
    located,
    iditeminpackage
  } = req.body;
  if (
    !idpackage ||
    !idorder ||
    !idcontainer ||
    !host ||
    !located ||
    !iditeminpackage
  ) {
    res.status(400).json({ message: "thieu thong tin" });
  }
  const pk = await PK.create({
    idpackage,
    idorder,
    idcontainer,
    host,
    located,
  });
  res.status(200).json(pk);
});


  


module.exports = router;
