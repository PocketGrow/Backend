const passport = require("passport");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const JWTStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;

const secretKey = process.env.JWT_SECRET;

const DefineJWTStrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey,
  },
  async (jwtPayload, done) => {
    const user = { email: jwtPayload.email };

    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: "User not found" });
    }
  }
);

const DefineLocalLoginStrategy = new LocalStrategy(
  { usernameField: "email", passwordField: "password" },
  async (username, password, done) => {
    try {
      const email = username;
      return done(null, { email, password });
    } catch (error) {
      return done(error);
    }
  }
);

// Middleware to protect routes with JWT authentication
const authenticateJWTToken = passport.authenticate("jwt", { session: false });

module.exports = {
  // Strategy
  DefineJWTStrategy,
  DefineLocalLoginStrategy,

  // Middleware
  authenticateJWTToken,
};
