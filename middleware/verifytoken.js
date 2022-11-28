const Jwt = require("jsonwebtoken");
const secret = process.env.jwt_crypto_key;
const verifyToken = (req, res, next) => {
  const email = req.headers.authorization;
  Jwt.verify(email, secret, (err, decrypted) => {
    if (err) {
      return res
        .status(403)
        .send({ status: false, message: "Unauthorized request" });
    }
    req.decrypted = decrypted;
    next();
  });
};
module.exports = verifyToken;
