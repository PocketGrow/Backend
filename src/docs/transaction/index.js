const getTransaction = require("./getTransaction");
const getTransactionById = require("./getTransactionById");
const createTransaction = require("./createTransaction");
const deleteTransaction = require("./deleteTransaction");

module.exports = {
  "/api/transaction": {
    ...getTransaction,
    ...createTransaction,
  },
  "/api/transaction/{transactionId}": {
    ...getTransactionById,
    ...deleteTransaction,
  },
};
