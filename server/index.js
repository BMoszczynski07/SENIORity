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
app.use(express.json({ limit: "35mb" }));
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
const handleMongoDBConnect = async () => {
  try {
    await mongoose.set("strictQuery", true);
    await mongoose.connect(MONGOOSE_URI);

    console.info("Connected successfully to MongoDB Cluster".green);
  } catch (e) {
    console.error(`#ERR! -> ${e.message}`.bgRed);
  }
};

app.get("/", (req, res) => {
  res.send("Backend application is working properly! PORT: " + BACKEND_PORT);
});

app.listen(BACKEND_PORT, () => {
  handleMongoDBConnect();
  console.log(`Backend application listening on port: ${BACKEND_PORT}`.bgGreen);
});
