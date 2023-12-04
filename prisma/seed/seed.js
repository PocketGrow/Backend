const { PrismaClient } = require("@prisma/client");
const seedUser = require("./user");
const seedNews = require("./news");

const prisma = new PrismaClient();

const seedDatabase = async () => {
  try {
    await seedUser(prisma);
    await seedNews(prisma);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();
