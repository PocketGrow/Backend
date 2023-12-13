const router = require("express").Router();

const { authenticateJWTToken } = require("../middlewares/passport");
const transactionService = require("../services/transaction");

router.get("", authenticateJWTToken, async (req, res, next) => {
  const userId = req.user.id;

  const transaction = await transactionService.getAllTransactions(userId);

  return res.success({ transaction });
});

router.get("/:id", authenticateJWTToken, async (req, res, next) => {
  const userId = req.user.id;
  const { id } = req.params;

  const transaction = await transactionService.getTransactionById(id, userId);

  if (!transaction) {
    return res.error("Transaction not found", 404);
  }

  return res.success({ transaction });
});

router.post("", authenticateJWTToken, async (req, res, next) => {
  const { name, nominal, date, type, transactionCategoryId } = req.body;
  const transaction = { name, nominal, date, type, transactionCategoryId };

  const userId = req.user.id;

  const newTransaction = await transactionService.createTransaction({
    ...transaction,
    userId,
  });

  if (!newTransaction) {
    return res.error("Wrong parameter", 400);
  }

  return res.success(
    { transaction: newTransaction },
    "Transaction has been added",
  );
});

router.delete("/:id", authenticateJWTToken, async (req, res, next) => {
  const userId = req.user.id;
  const { id } = req.params;

  const transaction = await transactionService.deleteTransaction(id, userId);

  if (!transaction) {
    return res.error("Transaction not found", 404);
  }

  return res.success({ transaction }, "Transaction has been deleted");
});

module.exports = router;
