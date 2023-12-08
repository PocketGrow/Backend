module.exports = {
  components: {
    schemas: {
      Users: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 10,
          },
          email: {
            type: "string",
            example: "john@email.com",
          },
          password: {
            type: "string",
            example: "12345",
          },
          fullname: {
            type: "string",
            example: "John James",
          },
          dateOfBirth: {
            type: "string",
            format: "date",
            example: "2002-01-01",
          },
        },
        xml: {
          name: "user",
        },
      },
      News: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 10,
          },
          title: {
            type: "string",
            example: "This is News Title.",
          },
          headerImg: {
            type: "string",
            example: "image-url.com",
          },
          author: {
            type: "string",
            example: "John James",
          },
          source: {
            type: "string",
            example: "Wikipedia",
          },
        },
        xml: {
          name: "user",
        },
      },
      Transaction: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 10,
          },
          name: {
            type: "string",
            example: "Laundry",
          },
          nominal: {
            type: "integer",
            example: 50000,
          },
          date: {
            type: "string",
            format: "date",
            example: "2023-12-01T23:00:28.934Z",
          },
          transactionCategoryId: {
            type: "integer",
            format: "int64",
            example: 1,
          },
          userId: {
            type: "integer",
            format: "int64",
            example: 1,
          },
        },
        xml: {
          name: "user",
        },
      },
    },
    requestBodies: {
      UserArray: {
        description: "List of user object",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },
      },
    },
  },
};
