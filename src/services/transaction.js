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
  const category = await prisma.transactionCategory.findUnique({
    where: {
      id: parseInt(transactionCategoryId),
    },
  });

  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

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
          id: user.id,
        },
      },
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
      user: {
        select: {
          fullname: true,
        },
      },
    },
  });

  return newTransaction;
};

const deleteTransaction = async (id, userId) => {
  const transaction = await prisma.transactions.delete({
    where: {
      id: parseInt(id),
      usersId: userId,
    },
  });

  return transaction;
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  deleteTransaction,
};
