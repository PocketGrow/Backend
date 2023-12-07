const router = require("express").Router();

const testRouter = require("./test");
const authRouter = require("./auth");
const newsRouter = require("./news");
const transactionRouter = require("./transaction");

router.use("/test", testRouter);
router.use("/auth", authRouter);
router.use("/news", newsRouter);
router.use("/transaction", transactionRouter);

module.exports = router;
