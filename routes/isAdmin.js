const express = require("express");
const { db } = require("../database/dbConns");
const router = express.Router();

router.get("/dashboard/admin/:email", async (req, res) => {
  const email = req.params.email;
  const decrypted = req.decrypted;
  if (email === decrypted) {
    const query = { email: email };
    const result = await db.secondHand.collection("user").findOne(query);
    if (result?.role === "admin") {
      return res.send({ status: "success", isAdmin: true });
    }
  } else return res.send({ status: 403, isAdmin: false });
});

module.exports = router;
