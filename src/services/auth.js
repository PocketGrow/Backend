const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

const createJWT = (user) => {
  const { id, email, fullname } = user;
  const filteredField = { id, email, fullname };
  const token = jwt.sign(filteredField, secretKey);

  return token;
};

module.exports = { createJWT };
