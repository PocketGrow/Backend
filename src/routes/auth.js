const router = require("express").Router();

const passport = require("passport");

const authService = require("../services/auth");

router.post("/register", async (req, res, next) => {
  passport.authenticate("register", (error, user, info) => {
    if (error) {
      console.log(error);
      return res.error("An error just occured", 400);
    }

    if (!user) {
      console.log(error);
      return res.error(info.message, 400);
    }

    const token = authService.createJWT(user);

    const { email, fullname } = user;
    return res.success({ token, email, fullname }, "Register success");
  })(req, res, next);
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", (error, user, info) => {
    if (error) {
      console.log(error);
      return res.error("An error just occured", 400);
    }

    if (!user) {
      console.log(error);
      return res.error(info.message, 401);
    }

    const token = authService.createJWT(user);

    const { email, fullname } = user;
    return res.success({ token, email, fullname }, "Login success");
  })(req, res, next);
});

module.exports = router;
