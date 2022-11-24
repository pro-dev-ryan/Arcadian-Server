const express = require("express");
const { db } = require("../database/dbConns");
const user = db;
const router = express.Router();

router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const userData = {
    name,
    email,
    role: "user",
  };
  const result = await user.user.insertOne(userData);
  if (result.acknowledged) {
    return res.send({ status: true, message: "user account has been created" });
  }
  res.send({ status: false, message: "some information is missing" });
});
module.exports = router;
