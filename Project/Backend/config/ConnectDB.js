const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/reserve"
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("Database connected successfully")
    }
    catch (error) {
        console.log(`error: ${error.message}`);
    }
}

module.exports = connectDB;