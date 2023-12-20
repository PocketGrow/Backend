module.exports = {
  post: {
    tags: ["Auth"],
    description: "Register a new user",
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
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Users",
            },
          },
        },
      },
      400: {
        description: "User already exist",
      },
      405: {
        description: "Invalid input",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
