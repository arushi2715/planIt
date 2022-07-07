const ObjectId = require("mongoose").Types.ObjectId;
const Todo = require("../../../models/todos");

exports.deleteTodo = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(500)
      .json({ status: false, message: "PLease provide a valid Object Id." });
  else {
    const todoExists = await Todo.findById({ _id: req.params.id });
    if (!todoExists)
      return res.status(400).json({
        status: false,
        message: "No todo with this id exists. PLease create a new todo.",
      });
  }
  const deletedTodo = await Todo.findByIdAndDelete({ _id: req.params.id });
  return res
    .status(200)
    .json({ message: "Todo with this id deleted", deletedTodo: deletedTodo });
};
