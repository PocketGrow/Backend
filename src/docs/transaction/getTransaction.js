module.exports = {
  get: {
    tags: ["Transaction"],
    description: "Get All Transaction",
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
