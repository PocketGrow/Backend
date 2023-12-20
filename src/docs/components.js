module.exports = {
  components: {
    schemas: {
      Users: {
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
          fullname: {
            type: "string",
            example: "Super Test",
          },
          dateOfBirth: {
            type: "string",
            format: "date",
            example: "2023-01-15T10:30:00Z",
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
          createDate: {
            type: "string",
            format: "date",
            example: "2023-01-15T10:30:00Z",
          },
        },
        xml: {
          name: "news",
        },
      },
      Transaction: {
        type: "object",
        properties: {
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
            example: "2023-01-01T00:00:00.000Z",
          },
          type: {
            type: "string",
            example: "EXPENSE",
          },
          transactionCategoryId: {
            type: "integer",
            format: "int64",
            example: 1,
          },
        },
        xml: {
          name: "transaction",
        },
      },
      Prediction: {
        type: "object",
        properties: {
          interest: {
            type: "object",
            properties: {
              calculated: {
                type: "array",
                example: 28489.465713500977,
              },
              rates: {
                type: "array",
                example: 5.697893142700195,
              },
            },
          },
          gold: {
            type: "array",
            example: 2715.66064453125,
          },
          house: {
            type: "array",
            example: 3.1216812133789062,
          },
          stock: {
            type: "array",
            example: 6394.5908203125,
          },
        },
        xml: {
          name: "Prediction",
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
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
      TransactionArray: {
        description: "List of transaction object",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Transaction",
              },
            },
          },
        },
      },
    },
  },
};
