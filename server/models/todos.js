const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todosSchema = new Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo;
