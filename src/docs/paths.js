const auth = require("./auth");
const news = require("./news");
const transaction = require("./transaction");

module.exports = {
  paths: {
    ...auth,
    ...news,
    ...transaction,
  },
};
