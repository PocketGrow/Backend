module.exports = {
  post: {
    tags: ["Auth"],
    description: "Create user",
    operationId: "createUser",
    parameter: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Users",
          },
        },
      },
    },
    responses: {
      default: {
        description: "success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Users",
            },
          },
        },
      },
      500: {
        description: "Server error",
      },
    },
  },
};
