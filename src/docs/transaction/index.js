const getTransaction = require("./getTransaction");
const getTransactionById = require("./getTransactionById");
const createTransaction = require("./createTransaction");
const deleteTransaction = require("./deleteTransaction");
const getLatestTransaction = require("./getLatestTransaction");

module.exports = {
  "/api/transaction": {
    ...getTransaction,
    ...createTransaction,
  },
  "/api/transaction/{transactionId}": {
    ...getTransactionById,
    ...deleteTransaction,
  },
  "/api/transaction/latest": {
    ...getLatestTransaction,
  },
};
