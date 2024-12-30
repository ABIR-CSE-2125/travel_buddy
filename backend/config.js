import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = "ets";
const CORS_ORIGIN = process.env.CORS_ORIGIN;
// Enums
export { PORT, MONGO_URI, DB_NAME, CORS_ORIGIN };
