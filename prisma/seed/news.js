const seedNews = async (prisma) => {
  await prisma.news.createMany({
    data,
  });

  console.log("News seeded successfully");
};

const data = [
  {
    title: "News1",
    content: "News1 is good",
    headerImg: "String?",
    author: "author news 1",
    source: "www.yoyuo.com",
  },
  {
    title: "News2",
    content: "News2 is good",
    headerImg: "String?",
    author: "author news 2",
    source: "www.yoyuo.com",
  },
];

module.exports = seedNews;
