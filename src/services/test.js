const prisma = require("../utils/prisma");

const testAll = async () => {
  const users = await prisma.testModel.findMany({
    select: {
      id: true,
    },
  });

  return users;
};

module.exports = { testAll };
