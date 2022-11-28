const { db } = require("../database/dbConns");

module.exports = adminChecker = async (req, res, next) => {
  email = req.decrypted;
  const query = { email: email };
  const isAdmin = await db.secondHand.collection("user").findOne(query);
  if (!isAdmin?.role === "admin") {
    return res.status(403).send({ mesage: "Other Access Deny" });
  }
  return next();
};
