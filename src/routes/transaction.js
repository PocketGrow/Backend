const router = require("express").Router();

const { authenticateJWTToken } = require("../middlewares/passport");
const transactionService = require("../services/transaction");

router.get("", authenticateJWTToken, async (req, res, next) => {
  const transaction = await transactionService.getAllTransactions();

  if (transaction.length === 0) {
    return res.error("No transaction found", 404);
  }

  return res.success({ transaction });
});

router.get("/:id", authenticateJWTToken, async (req, res, next) => {
  const { id } = req.params;
  const transaction = await transactionService.getTransactionById(id);

  if (!transaction) {
    return res.error("Transaction not found", 404);
  }

  return res.success({ transaction });
});

router.post("", authenticateJWTToken, async (req, res, next) => {
  const { name, nominal, date, type, transactionCategoryId, userId } = req.body;
  const transaction = { name, nominal, date, type, transactionCategoryId, userId };

  const newTransaction = await transactionService.createTransaction(transaction);
    
  return res.success({ transaction: newTransaction}, "Transaction has been added");
});

router.delete("/:id", authenticateJWTToken, async (req, res, next) => {
  const { id } = req.params;
  const transaction = await transactionService.deleteTransaction(id);
  
  if (!transaction) {
    return res.error("Transaction not found", 404);
  }
  
  return res.success({ transaction });
});

module.exports = router;
