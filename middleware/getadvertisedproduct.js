const express = require("express");
const { ObjectId } = require("mongodb");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/advertise/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id), advertise: true };
  const result = await db.secondHand.collection("product").findOne(query);
  if (result.advertise === true) {
    return res.send({ status: true, result });
  }
  res.send({ status: false, message: "product is not advertised" });
});

module.exports = router;
