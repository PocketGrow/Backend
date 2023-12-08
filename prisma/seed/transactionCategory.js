const seedTransactionCategory = async (prisma) => {
  await prisma.transactionCategory.createMany({
    data,
  });

  console.log("Transaction Category seeded successfully");
};

const data = [
  { name: "Salary" },
  { name: "Interest" },
  { name: "Rent" },
  { name: "Grocery" },
  { name: "Utilities" },
  { name: "Transportation" },
];

module.exports = seedTransactionCategory;
