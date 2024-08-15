const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const taskRouter = require("./src/routes/task.routes");
const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

connectToDatabase();

app.use("/tasks", taskRouter);

app.listen(8000, () => console.log(`Listening on port 8000!!!`));
