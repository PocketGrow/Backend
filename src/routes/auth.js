const router = require("express").Router();

const passport = require("passport");

const authService = require("../services/auth");

router.post("/register", async (req, res, next) => {
  passport.authenticate("register", (error, user, info) => {
    if (error) {
      return res.send({ msg: "An error just occured" });
    }

    if (!user) {
      return res.send({ msg: info });
    }

    const token = authService.createJWT(user);

    const { email, fullname } = user;
    res.send({ msg: "Login success", data: { token, email, fullname } });
  })(req, res, next);
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", (error, user, info) => {
    if (error) {
      res.status(400).send({ msg: "An error has occured" });
    }

    if (!user) {
      res.status(401).send({ msg: "User not found" });
    }

    const token = authService.createJWT(user);

    res.send({ msg: "Login success", data: { token } });
  })(req, res, next);
});

module.exports = router;
