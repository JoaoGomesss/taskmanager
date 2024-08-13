const express = require("express");
const dotenv = require("dotenv");
const taskRouter = "./src/routes/task.routes";

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use("/tasks", taskRouter);

connectToDatabase();
