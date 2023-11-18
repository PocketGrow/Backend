const prisma = require("../util/prisma");

const testAll = async () => {
  const users = await prisma.testModel.findMany({
    select: {
      id: true,
    },
  });

  return users;
};

module.exports = { testAll };
