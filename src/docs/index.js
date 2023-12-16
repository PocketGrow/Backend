const basicInfo = require("./basicInfo");
const servers = require("./servers");
const components = require("./components");
const tags = require("./tags");
const auth = require("./auth");
const news = require("./news");
const transaction = require("./transaction");

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...auth,
  ...news,
  ...transaction,
};
