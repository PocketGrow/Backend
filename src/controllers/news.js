const newsService = require("../services/news")

const getAllNews = async (req, res, next) => {
  const allNews = await newsService.getAllNews();
  res.json(allNews);
};

const getNewsRecommendations = async (req, res, next) => {
  const randomNewsIds = Array.from({ length: 3 }, () => Math.floor(Math.random() * 12) + 1);
  const newsRecommendations = await newsService.getNewsRecommendations(randomNewsIds);

  if (!newsRecommendations || newsRecommendations.length === 0) {
    res.status(404).json({ message: 'No news recommendations found' });
    return;
  }
  
  res.json(newsRecommendations);
};

const getNewsByID = async (req, res, next) => {
  const { id } = req.params;
  const news = await newsService.getNewsByID(id);

  if (!news) {
    res.status(404).json({ message: 'News not found' });
    return;
  }

  res.json(news);
};

module.exports = {
  getAllNews,
  getNewsByID,
  getNewsRecommendations,
};
