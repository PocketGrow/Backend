const router = require("express").Router();

const { authenticateJWTToken } = require("../middlewares/passport");
const predictionService = require("../services/prediction");

router.get("", authenticateJWTToken, async (req, res, next) => {
  const { money } = req.query;

  const data = await predictionService.getPrediction(money);

  if (!data) return res.error("Please try again later", 500);

  return res.success({ data });
});

module.exports = router;
