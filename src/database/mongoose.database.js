const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanager.rsyty.mongodb.net/`
        );
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log("Error to connect with MongoDB", error);
    }
};

module.exports = connectToDatabase;
