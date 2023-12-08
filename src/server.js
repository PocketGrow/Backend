require("dotenv").config();
const express = require("express");
const cors = require("cors");

const passport = require("passport");
const swaggerUi = require("swagger-ui-express");

const routes = require("./routes");
const docs = require("./docs");
const { DefineJWTStrategy, DefineLocalLoginStrategy, DefineLocalRegisterStrategy } = require("./middlewares/passport");
const responseFormatter = require("./middlewares/responseFormatter");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
passport.use(DefineJWTStrategy);
passport.use("login", DefineLocalLoginStrategy);
passport.use("register", DefineLocalRegisterStrategy);

app.use(responseFormatter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
