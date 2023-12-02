const router = require("express").Router();

const { authenticateJWTToken } = require("../middlewares/passport");
const newsService = require("../services/news");

router.get("", authenticateJWTToken, async (req, res, next) => {
  const news = await newsService.getAllNews();

  if (news.length === 0) {
    return res.error("No news found", 404);
  }

  return res.success({ news });
});

router.get("/recommendations", authenticateJWTToken, async (req, res, next) => {
  const newsRecommendations = await newsService.getNewsRecommendations();

  if (!newsRecommendations || newsRecommendations.length === 0) {
    return res.error("No news recommendations found", 404);
  }

  return res.success({ news: newsRecommendations });
});

router.get("/:id", authenticateJWTToken, async (req, res, next) => {
  const { id } = req.params;
  const news = await newsService.getNewsByID(id);

  if (!news) {
    return res.error("News not found", 404);
  }

  return res.success({ news });
});

module.exports = router;
