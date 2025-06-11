import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "JOBPILOT API",
      version: "1.0.0",
      description:
        "A simple job tracking API using Express, Sequelize, and MySQL.",
      contact: {
        name: "API Support",
        url: "http://localhost:" + process.env.PORT + "/api-docs",
      },
    },
    servers: [
      {
        url: "http://localhost:" + process.env.PORT + "/api",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to the API routes
};

export const specs = swaggerJsdoc(options);
