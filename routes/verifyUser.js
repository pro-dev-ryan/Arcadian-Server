const express = require("express");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/loginuser", async (req, res) => {
  const email = req.query.email;
  const query = { email: email };
  const result = await db.user.findOne(query);
  if (result) {
    return res.send({ status: true, result });
  }
  return res.send({ status: false, message: "user not found" });
});

module.exports = router;
