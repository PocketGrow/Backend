const router = require("express").Router();

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

module.exports = router;
