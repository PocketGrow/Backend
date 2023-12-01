const router = require("express").Router();

const newsController = require('../controllers/news');

router.get('/', newsController.getAllNews);
router.get('/recommendations/', newsController.getNewsRecommendations);
router.get('/:id', newsController.getNewsByID);

module.exports = router;