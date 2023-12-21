module.exports = {
  "/api/prediction?money=5000": {
    get: {
      tags: ["Prediction"],
      description: "Get prediction values for interest, gold, house, and stock",
      parameters: [
        {
          name: "money",
          in: "query",
          description: "The nominal amount of money to be predicted",
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
                $ref: "#/components/schemas/Prediction",
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
  },
};
