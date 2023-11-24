const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

const createJWT = (user) => {
  const filteredField = { email: user.email };
  const token = jwt.sign(filteredField, secretKey, { expiresIn: "1h" });

  return token;
};

module.exports = { createJWT };
