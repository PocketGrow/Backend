const router = require("express").Router();

const { authenticateJWTToken } = require("../middlewares/passport");
const newsService = require("../services/news")
  

router.get('/', authenticateJWTToken, async (req, res, next) => {
    const allNews = await newsService.getAllNews();
    res.json(allNews);
  }
);
  
router.get('/recommendations/', authenticateJWTToken, async (req, res, next) => {
    const newsRecommendations = await newsService.getNewsRecommendations();
  
    if (!newsRecommendations || newsRecommendations.length === 0) {
      res.status(404).json({ message: 'No news recommendations found' });
      return;
    }
  
    res.json(newsRecommendations);
  });
  
router.get('/:id', authenticateJWTToken, async (req, res, next) => {
    const { id } = req.params;
    const news = await newsService.getNewsByID(id);
  
    if (!news) {
      res.status(404).json({ message: 'News not found' });
      return;
    }
  
    res.json(news);
  }
);

module.exports = router;