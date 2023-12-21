module.exports = {
  delete: {
    tags: ["Transaction"],
    description: "Deletes a transaction by its id",
    parameters: [
      {
        name: "transactionId",
        in: "path",
        description: "id of the transaction to delete",
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
