const express = require("express");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/dashboard/seller/verify/:email", async (req, res) => {
  const email = req.params.email;
  const query = { email: email };
  const result = await db.secondHand.collection("user").findOne(query);
  if (result?.verify) {
    return res.send({ status: true, result });
  }
  res.send({ status: false, message: "unverified" });
});

module.exports = router;
