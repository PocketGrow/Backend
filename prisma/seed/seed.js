const { PrismaClient } = require("@prisma/client");
const seedUser = require("./user");
const seedNews = require("./news");
const transactionCategory = require("./transactionCategory");

const prisma = new PrismaClient();

const seedDatabase = async () => {
  try {
    await seedUser(prisma);
    await seedNews(prisma);
    await transactionCategory(prisma);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();
