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
      interest: {
        calculated: [
          data[0].data.calculated[0],
          data[0].data.calculated[2],
          data[0].data.calculated[4],
          data[0].data.calculated[9],
        ],
        rates: [
          data[0].data.rates[0],
          data[0].data.rates[2],
          data[0].data.rates[4],
          data[0].data.rates[9],
        ],
      },
      gold: [
        data[1].data[0],
        data[1].data[2],
        data[1].data[4],
        data[1].data[9],
      ],
      house: [
        data[2].data[0],
        data[2].data[2],
        data[2].data[4],
        data[2].data[9],
      ],
      stock: data[3].data,
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
