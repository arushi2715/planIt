require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbConnection = require("./configs/db");
const auth = require("./routes/authRoutes");
const notes = require("./routes/notesRoutes");
const blogs=require("./routes/blogRoutes");
const todos=require("./routes/todoRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT||8000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", auth);
app.use("/notes", notes);
app.use("/blogs",blogs);
app.use("/todos",todos);

// if(process.env.NODE_ENV==="production"){
//   app.use(express.static("client/build"));
// }

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});


//backend deployed link-- https://jot-diaries.herokuapp.com/