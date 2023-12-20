module.exports = {
  post: {
    tags: ["Transaction"],
    description: "Create a new transaction",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Transaction",
          },
        },
      },
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Transaction",
            },
          },
        },
      },
      405: {
        description: "Invalid input",
      },
      500: {
        description: "Server error",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
};
