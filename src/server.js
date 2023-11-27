require("dotenv").config();
const express = require("express");
const cors = require("cors");

const passport = require("passport");

const routes = require("./routes");
const {
  DefineJWTStrategy,
  DefineLocalLoginStrategy,
  DefineLocalRegisterStrategy,
} = require("./middlewares/passport");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
passport.use(DefineJWTStrategy);
passport.use("login", DefineLocalLoginStrategy);
passport.use("register", DefineLocalRegisterStrategy);

// SWAGGER
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const apiDocumentation = YAML.load("src/api-docs.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
