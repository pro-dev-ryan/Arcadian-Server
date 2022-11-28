const express = require("express");
const router = express.Router();
const { db } = require("../database/dbConns");

router.delete("/delete", async (req, res) => {
  const email = req.query;

  const query = { email: email };
  const result = await db.secondHand.collection("user").deleteOne(query);
  if (result.deletedCount >= 0) {
    return res.send({ status: true, message: "successfully deleted" });
  }
  return res.send({ status: false, message: "can not be deleted" });
});
module.exports = router;
