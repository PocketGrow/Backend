module.exports = {
  get: {
    tags: ["News"],
    description: "Get a specific news article based on its id.",
    parameters: [
      {
        name: "newsId",
        in: "path",
        description: "id of news to return",
        required: true,
        schema: {
          type: "integer",
          format: "int64",
        },
      },
    ],
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
      404: {
        description: "News not found",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
};
