const prisma = require("../utils/prisma");

const getAllTransactions = async () => {
    const allTransactions = await prisma.transactions.findMany();
    return allTransactions;
};

const getTransactionById = async (id) => {
    const transaction = await prisma.transactions.findUnique({
      where: { id: parseInt(id) },
    });
    return transaction;
};

const createTransaction = async ({name, nominal, date, type, transactionCategoryId, userId}) => {
    const user = await prisma.users.findUnique({
        where: {id: userId},
    })

    if (!user) return {user: null, message: 'User not found'};
  
    const category = await prisma.transactionCategory.findUnique({
        where: { id: transactionCategoryId },
    });

    if (!category) return {category: null, message: 'Category not found'};
  
    const newTransaction = await prisma.transactions.create({
        data: {
          name,
          nominal,
          date,
          type,
          category: { connect: { id: transactionCategoryId } },
          user: { connect: { id: userId } },
        },
    });

    return newTransaction;
};

const deleteTransaction = async (id) => {
    const transaction = await prisma.transactions.delete({
      where: { id: parseInt(id) },
    });
    return transaction;
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  deleteTransaction
};