module.exports = {
  post: {
    tags: ["Auth"],
    description: "Login user",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                example: "testtest109@gmail.com",
              },
              password: {
                type: "string",
                example: "testtesttos",
              },
            },
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
        description: "Invalid username/password",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
