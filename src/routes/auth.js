const router = require("express").Router();

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  "login",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (username, password, done) => {
      try {
        const email = username;
        return done(null, { email, password });
      } catch (error) {
        return done(error);
      }
    }
  )
);

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", (error, user, info) => {
    if (error) {
      res.send({ msg: "error" });
    }
    res.send({ msg: "succ", data: user });
  })(req, res, next);
});

module.exports = router;
