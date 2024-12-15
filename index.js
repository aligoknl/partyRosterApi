import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import ParticipantRouter from "./routes/participant.js";
import { countVisitors } from "./controller/visitor.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8085;

// MongoDB Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(countVisitors);

// Routes
app.use("/api", ParticipantRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, async () => {
  await connect();
  console.log(`Server running on port ${PORT}`);
});
