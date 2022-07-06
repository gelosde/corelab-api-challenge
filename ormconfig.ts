import dotenv = require("dotenv");
import path = require("path");

dotenv.config();

const dbConfig = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [path.join(__dirname, "./src/entities/**/*.ts")],
  migrations: [path.join(__dirname, "./src/migrations/**/*.ts")],
  cli: {
    entitiesDir: path.join(__dirname, "./src/entities"),
    migrationsDir: path.join(__dirname, "./src/migrations"),
  },
};

const dbProductionConfig = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [path.join(__dirname, "./build/src/entities/**/*.js")],
  migrations: [path.join(__dirname, "./build/src/migrations/**/*.js")],
  cli: {
    entitiesDir: path.join(__dirname, "./build/src/entities"),
    migrationsDir: path.join(__dirname, "./build/src/migrations"),
  },
  ssl: { rejectUnauthorized: false },
};

module.exports =
  process.env.NODE_ENV === "production" ? dbProductionConfig : dbConfig;
