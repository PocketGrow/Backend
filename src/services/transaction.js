const prisma = require("../utils/prisma");

const getAllTransactions = async (userId) => {
  const allTransactions = await prisma.transactions.findMany({
    where: {
      usersId: parseInt(userId),
    },
  });

  return allTransactions;
};

const getTransactionById = async (id, userId) => {
  const transaction = await prisma.transactions.findUnique({
    where: {
      id: parseInt(id),
      usersId: userId,
    },
  });

  return transaction;
};

const createTransaction = async ({
  name,
  nominal,
  date,
  type,
  transactionCategoryId,
  userId,
}) => {
  try {
    const category = await prisma.transactionCategory.findUnique({
      where: {
        id: parseInt(transactionCategoryId),
      },
    });

    if (!category) return null;

    const newTransaction = await prisma.transactions.create({
      data: {
        name: name,
        nominal: nominal,
        date: date,
        type: type,
        category: {
          connect: {
            id: category.id,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return newTransaction;
  } catch (error) {
    return null;
  }
};

const deleteTransaction = async (id, userId) => {
  try {
    const transaction = await prisma.transactions.delete({
      where: {
        id: parseInt(id),
        usersId: userId,
      },
    });

    return transaction;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  deleteTransaction,
};
