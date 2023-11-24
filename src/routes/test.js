const router = require("express").Router();

const { authenticateJWTToken } = require("../middlewares/passport");
const testService = require("../services/test");

router.get("", (req, res) => {
  res.status(200).send({
    msg: "connection working",
  });
});

router.get("/all", async (req, res) => {
  const testModels = await testService.testAll();

  console.log(testModels);

  res.status(200).send({
    msg: "all working",
  });
});

router.get("/secured-by-jwt", authenticateJWTToken, async (req, res) => {
  res.status(200).send({
    msg: "all working",
    data: req.user,
  });
});

module.exports = router;
