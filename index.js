const express = require("express");
const dotenv = require("dotenv");
const taskRouter = require("./src/routes/task.routes");
const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/tasks", taskRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listening on port ${port}!!!`);
});

connectToDatabase();
