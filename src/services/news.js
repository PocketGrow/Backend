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

const getNewsRecommendations = async () => {
  const recommendations = await prisma.news.findMany({
    take: 3,
    orderBy: { createDate: 'desc' },
  });
  return recommendations;
};

module.exports = {
  getAllNews,
  getNewsByID,
  getNewsRecommendations
}