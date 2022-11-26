const express = require("express");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/shop/:category", async (req, res) => {
  const data = req.params.category;
  const query = { type: data };
  const result = await db.secondHand
    .collection("product")
    .find(query)
    .toArray();
  if (result.acknowledged) {
    return res.send({ status: true, result });
  }
  res.send({ status: true, message: "No product found in this category" });
});

module.exports = router;
