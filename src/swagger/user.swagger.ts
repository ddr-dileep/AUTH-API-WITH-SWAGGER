export const userSwagger = {
  "/api/v1/user/register": {
    tag: "User",
    post: {
      tags: ["Auth"],
      summary: "Register a new user",
      description: "API to register a new user with required details.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  example: "johndoe",
                },
                password: {
                  type: "string",
                  example: "Password123!",
                },
                email: {
                  type: "string",
                  example: "johndoe@example.com",
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "User registered successfully",
        },
        "400": {
          description: "Bad request (validation errors or missing data)",
        },
      },
    },
  },
  "/api/v1/user/login": {
    post: {
      tags: ["Auth"],
      summary: "Login user",
      description: "API to login user with required details.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  example: "johndoe",
                },
                password: {
                  type: "string",
                  example: "Password123!",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "User Login successfully",
        },
        "400": {
          description: "Bad request (validation errors or missing data)",
        },
      },
    },
  },
  "/api/v1/user/user-info": {
    get: {
      tags: ["Auth"],
      summary: "Get user information",
      description: "API to get user information using a Bearer token.",
      security: [
        {
          BearerAuth: [],
        },
      ],
      responses: {
        "200": {
          description: "User information retrieved successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: {
                    type: "string",
                    example: "johndoe",
                  },
                  email: {
                    type: "string",
                    example: "johndoe@example.com",
                  },
                },
              },
            },
          },
        },
        "401": {
          description: "Unauthorized (Invalid or missing token)",
        },
        "500": {
          description: "Server error",
        },
      },
    },
  },
  "/api/v1/user/update-info": {
    patch: {
      tags: ["Auth"],
      summary: "Update user information",
      description: "API to update user information using a Bearer token.",
      security: [
        {
          BearerAuth: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  example: "newusername",
                },
                email: {
                  type: "string",
                  example: "newemail@example.com",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "User information updated successfully",
        },
        "400": {
          description: "Bad request (validation errors or missing data)",
        },
        "401": {
          description: "Unauthorized (Invalid or missing token)",
        },
        "404": {
          description: "Not found (User not found)",
        },
        "500": {
          description: "Server error",
        },
      },
    },
  },
  "/api/v1/user/delete-info": {
    delete: {
      tags: ["Auth"],
      summary: "Delete user information",
      description: "API to delete user information using a Bearer token.",
      security: [
        {
          BearerAuth: [],
        },
      ],
      responses: {
        "200": {
          description: "User information deleted successfully",
        },
        "401": {
          description: "Unauthorized (Invalid or missing token)",
        },
        "404": {
          description: "Not found (User not found)",
        },
        "500": {
          description: "Server error",
        },
      },
    },
  },
};
