require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const prisma = require("./util/prisma.js");
const port = process.env.PORT;

app.use(cors());

app.get("/test-all", async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
  });

  console.log(users);

  res.status(200).send({
    msg: "working",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
