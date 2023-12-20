module.exports = {
  "/api/prediction?money=5000": {
    get: {
      tags: ["Prediction"],
      description: "Get Prediction",
      parameters: [
        {
          name: "money",
          in: "query",
          description: "ID of news to return",
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
