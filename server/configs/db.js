require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;


dbConnection.on("error", console.error.bind(console, "Mongodb connection error"));

dbConnection.once("open", () => {
  console.log("Connected to databse");
});

module.exports=dbConnection;