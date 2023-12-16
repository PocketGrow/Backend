const register = require("./register");
const login = require("./login");

module.exports = {
  "/api/auth/register": {
    ...register,
  },
  "/api/auth/login": {
    ...login,
  },
};
