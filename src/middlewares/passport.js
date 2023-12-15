const passport = require("passport");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const JWTStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;

const secretKey = process.env.JWT_SECRET;

const userService = require("../services/user");
const authService = require("../services/auth");

const DefineJWTStrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey,
  },
  async (jwtPayload, done) => {
    const { id, email, fullname } = jwtPayload;

    if (!id || !email || !fullname)
      return done(null, false, { message: "Unauthorized" });

    const user = await authService.findUser(id, email, fullname);

    if (user) {
      return done(null, { id, email, fullname });
    } else {
      return done(null, false, { message: "Unauthorized" });
    }
  },
);

const DefineLocalRegisterStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },
  async (req, username, password, done) => {
    try {
      const { email, password, fullname, dateOfBirth } = req.body;

      const { user, message } = await userService.createUser(
        email,
        password,
        fullname,
        dateOfBirth,
      );

      if (!user) {
        return done(null, null, { message });
      }

      return done(null, user);
    } catch (error) {
      console.log(error);
      return done(error);
    }
  },
);

const DefineLocalLoginStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },
  async (req, username, password, done) => {
    try {
      const { email, password } = req.body;

      const { user, message } = await authService.logIn(email, password);

      if (!user) {
        return done(null, null, { message });
      }

      return done(null, user);
    } catch (error) {
      console.log(error);
      return done(error);
    }
  },
);

// Middleware to protect routes with JWT authentication
const authenticateJWTToken = passport.authenticate("jwt", { session: false });

module.exports = {
  // Strategy
  DefineJWTStrategy,
  DefineLocalRegisterStrategy,
  DefineLocalLoginStrategy,

  // Middleware
  authenticateJWTToken,
};
