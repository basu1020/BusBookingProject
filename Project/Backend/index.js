const app= require('./app');
const dotenv = require('dotenv')
const connectDB = require("./config/ConnectDB");
const port = process.env.PORT || 3000
//config dotenv
dotenv.config()
//database
connectDB()

app.listen(port, () => {
    console.log(`live on port: ${port}`);
})