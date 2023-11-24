const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const prisma = require("../utils/prisma");

const secretKey = process.env.JWT_SECRET;

const createJWT = (user) => {
  const { id, email, fullname } = user;
  const filteredField = { id, email, fullname };
  const token = jwt.sign(filteredField, secretKey);

  return token;
};

const logIn = async (email, password) => {
  const user = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    return { user: null, message: "Authentication failed" };
  }

  const { hashedPassword, passwordSalt } = user;
  const hashedInputPassword = await bcrypt.hash(password, passwordSalt);

  const passwordMatch = hashedInputPassword == hashedPassword;

  if (passwordMatch) {
    return { user: user, message: "Authentication success" };
  }
  return { user: null, message: "Authentication failed" };
};

module.exports = { createJWT, logIn };
