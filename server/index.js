require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbConnection = require("./configs/db");
const auth = require("./routes/authRoutes");
const notes = require("./routes/notesRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", auth);
app.use("/notes", notes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
