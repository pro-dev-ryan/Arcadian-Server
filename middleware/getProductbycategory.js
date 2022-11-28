const express = require("express");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/shop/category/:type", async (req, res) => {
  const data = req.params.type;
  const query = { type: data };
  const result = await db.secondHand
    .collection("product")
    .find(query)
    .toArray();
  if (result.length !== 0) {
    return res.send({ status: true, result, data });
  }
  res.send({ status: false, message: "No product found in this category" });
});

module.exports = router;
