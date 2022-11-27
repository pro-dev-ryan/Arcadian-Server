const express = require("express");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/category", async (req, res) => {
  const result = await db.secondHand.collection("category").find({}).toArray();
  res.send(result);
});

module.exports = router;
