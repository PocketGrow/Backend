module.exports = {
  get: {
    tags: ["News"],
    description: "Get a list of all available news articles",
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/News",
            },
          },
        },
      },
      401: {
        description: "Authentication required",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
};
