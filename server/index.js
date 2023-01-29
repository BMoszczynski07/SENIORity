import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

dotenv.config();

const { FRONTEND_URL, BACKEND_PORT, MONGOOSE_URI } = process.env;

// app
const app = express();

// app use
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [FRONTEND_URL],
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

// app routes
import User from "./routes/API/User.js";

app.use("/user", User);

// mongodb connect
const handleMongoDBConnect = async (uri) => {
  try {
    await mongoose.set("strictQuery", true);
    await mongoose.connect(uri);

    console.info("Connected successfully to MongoDB Cluster".green);
  } catch (e) {
    console.error(`#ERR! -> ${e.message}`.bgRed);
  }
};

app.listen(BACKEND_PORT, () => {
  // handleMongoDBConnect(MONGOOSE_URI);
  console.log(`Backend application listening on port: ${BACKEND_PORT}`.bgGreen);
});
