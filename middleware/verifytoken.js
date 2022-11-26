const Jwt = require("jsonwebtoken");
const secret = process.env.jwt_crypto_key;
const verifyToken = (req, res, next) => {
  const email = req.headers.authorization;
  Jwt.sign(email, secret, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ status: false, message: "Unauthorized request" });
    }
    req.decoded = decoded;
    next();
  });
};
module.exports = verifyToken;
