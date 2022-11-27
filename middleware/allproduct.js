const express = require("express");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/allproducts", async (req, res) => {
  const result = await db.secondHand.collection("product").find({}).toArray();
  res.send({ status: true, result });
});

module.exports = router;
