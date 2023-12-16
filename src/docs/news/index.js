const getNews = require("./getNews");
const getNewsById = require("./getNewsById");
const getRecommendation = require("./getNewsRecommendation");

module.exports = {
  paths: {
    "/api/news": {
      ...getNews,
    },
    "/api/news/recommendations": {
      ...getRecommendation,
    },
    "/api/news/{newsId}": {
      ...getNewsById,
    },
  },
};
