import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./configurations/DBConfig.js";
import router from "./routes/appRoute.js";

// Express Configurations`
const app = express();
dotenv.config();

// Middleware Connections
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

// Connection
const PORT = process.env.PORT || 5000;
const DBURL = process.env.MONGO_DB_URL;
const DBUSERNAME = process.env.MONGO_DB_USERNAME;
const DBPASSWORD = process.env.MONGO_DB_PASSWORD;

app.listen(PORT, () => {
  connectDB(DBURL, DBUSERNAME, DBPASSWORD, () => {
    console.log("App running in port: " + PORT);
    console.log("Connected to MongoDB");
  });
});
