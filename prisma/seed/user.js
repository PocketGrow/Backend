const bcrypt = require("bcryptjs");

const seedUser = async (prisma) => {
  const users = await Promise.all(
    data.map(async ({ email, password, fullname, dateOfBirth }) => {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      return {
        email,
        hashedPassword,
        passwordSalt: salt,
        fullname,
        dateOfBirth: new Date(dateOfBirth),
      };
    }),
  );

  await prisma.users.createMany({
    data: users,
  });

  console.log("User seeded successfully");
};

const data = [
  {
    email: "testtest99@gmail.com",
    password: "testtest",
    fullname: "test test",
    dateOfBirth: new Date(),
  },
  {
    email: "testtest@gmail.com",
    password: "testtesttos",
    fullname: "tos tos 1",
    dateOfBirth: new Date(),
  },
];

module.exports = seedUser;
