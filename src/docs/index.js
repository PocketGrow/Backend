const basicInfo = require("./basicInfo");
const servers = require("./servers");
const components = require("./components");
const tags = require("./tags");
const auth = require("./auth");
const news = require("./news");
const transaction = require("./transaction");
const prediction = require("./prediction");

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  paths: {
    ...auth,
    ...news,
    ...transaction,
    ...prediction,
  },
};
