import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const { FRONTEND_URL, BACKEND_PORT } = process.env;

const app = express();

// app use
app.use(express.json({ limit: "100mb" }));
app.use(
  cors({
    origin: [FRONTEND_URL],
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.listen(BACKEND_PORT, () => {
  console.log(`Backend application listening on port: ${BACKEND_PORT}`.bgGreen);
});
