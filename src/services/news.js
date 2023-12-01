const prisma = require("../utils/prisma");

const getAllNews = async () => {
  const allNews = await prisma.news.findMany();
  return allNews;
};

const getNewsByID = async (id) => {
  const news = await prisma.news.findUnique({
    where: { id: parseInt(id) },
  });
  return news;
};

const getNewsRecommendations = async (randomNewsIds) => {
  const recommendations = await prisma.news.findMany({
    where: { id: { in: randomNewsIds } },
  });

  return recommendations;
};

module.exports = {
  getAllNews,
  getNewsByID,
  getNewsRecommendations,
}