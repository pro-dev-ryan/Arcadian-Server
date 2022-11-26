const express = require("express");
const { db } = require("../database/dbConns");
const router = express.Router();

router.post("/addproduct", async (req, res) => {
  const pd = req.body;
  const result = await db.secondHand.collection("product").insertOne(pd);
  console.log(result);
  if (result.acknowledged) {
    return res.send({ status: true, message: "Post Operation Is Successful" });
  }
  res.send({ status: false, message: "Post Operation is failed, Try Later" });
});

module.exports = router;
