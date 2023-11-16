require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/test-all", (req, res) => {
  res.status(200).send({
    msg: "working",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
