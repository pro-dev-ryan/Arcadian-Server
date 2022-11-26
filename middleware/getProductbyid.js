const express = require("express");
const { ObjectId } = require("mongodb");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/shop/category/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.secondHand.collection("product").findOne(query);
  if (result.acknowledged) {
    return res.send({ status: true, result });
  }
  res.send({ status: false, message: "Product not found" });
});

module.exports = router;
