import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

console.log("hello world");

app.get("/", (req, res) => {
  res.send("Hello in side the app");
});

export default app;
