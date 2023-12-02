const bcrypt = require("bcryptjs");

const prisma = require("../utils/prisma");

const createUser = async (email, password, fullname, dateOfBirth) => {
  const foundUser = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  if (foundUser) return { user: null, message: "User already exist" };

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await prisma.users.create({
    data: {
      email,
      hashedPassword,
      passwordSalt: salt,
      fullname,
      dateOfBirth: new Date(dateOfBirth),
    },
    select: {
      id: true,
      email: true,
      fullname: true,
    },
  });

  return { user: newUser, message: null };
};

module.exports = {
  createUser,
};
