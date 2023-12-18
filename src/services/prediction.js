const getPrediction = async (money) => {
  const mlHost = process.env.ML_HOSTNAME;

  const urls = [
    `${mlHost}/interest?money=${money}`,
    `${mlHost}/gold`,
    `${mlHost}/house`,
    `${mlHost}/stock`,
  ];

  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    const data = await Promise.all(
      responses.map((response) => response.json()),
    );

    const formattedData = {
      interest: data[0],
      gold: data[1],
      house: data[2],
      stock: data[3],
    };
    return formattedData;
  } catch (error) {
    console.error("Error fetching ML:", error);
    return null;
  }
};

module.exports = {
  getPrediction,
};
