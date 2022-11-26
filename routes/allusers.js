const express = require("express");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/dashboard/admin/alluser", async (req, res) => {
  const result = await db.secondHand.collection("user").find({}).toArray();
  res.send({ status: true, result });
});

module.exports = router;
