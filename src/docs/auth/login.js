module.exports = {
  post: {
    tags: ["Auth"],
    description: "Login user",
    operationId: "loginUser",
    parameters: [
      {
        name: "email",
        in: "query",
        description: "Email for login",
        required: true,
        schema: {
          type: "string",
        },
      },
      {
        name: "password",
        in: "query",
        description: "The password for login in clear text",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "Login succesfully",
        content: {
          "application/json": {
            schema: {
              type: "string",
            },
          },
        },
      },
      400: {
        description: "Invalid username/password",
      },
    },
  },
};
