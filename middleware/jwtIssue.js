const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { db } = require("../database/dbConns");
const sk = process.env.jwt_crypto_key;

router.get("/issueToken", async (req, res) => {
  const email = req.query.email;
  const query = { email: email };
  const result = await db.user.findOne(query);
  if (result) {
    const token = jwt.sign(email, sk);
    if (token) {
      return res.send({ status: true, token });
    }
    return res.send({ status: false, message: "token generate failed" });
  }
  return res.status(401).send({ status: false, message: "Invalid User" });
});

module.exports = router;
