module.exports = {
  delete: {
    tags: ["Transaction"],
    description: "Delete transaction",
    parameters: [
      {
        name: "transactionId",
        in: "path",
        description: "ID of transaction to return",
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
              $ref: "#/components/schemas/Transaction",
            },
          },
        },
      },
      401: {
        description: "Authentication required",
      },
      404: {
        description: "Transaction not found",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
};
