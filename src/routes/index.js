const router = require("express").Router();

const testRouter = require("./test");

router.use("/test", testRouter);

module.exports = router;
