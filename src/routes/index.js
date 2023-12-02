const router = require("express").Router();

const testRouter = require("./test");
const authRouter = require("./auth");
const newsRouter = require("./news");

router.use("/test", testRouter);
router.use("/auth", authRouter);
router.use("/news", newsRouter);

module.exports = router;
