const ObjectId = require("mongoose").Types.ObjectId;
const Todo = require("../../../models/todos");

exports.getTodo = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(500).json({
      status: false,
      message:
        "This is not a valid object id. PLease provide a valid object id.",
    });
  else {
    const todoExists = await Todo.findById({ _id: req.params.id });
    if (!todoExists)
      return res.status(400).json({
        status: false,
        message: "No todo with this id exosts. Please create a new todo.",
      });
  }
  const todoDetails = await Todo.findById({ _id: req.params.id });
  return res
    .status(200)
    .json({
      status: true,
      message: "THese are the required todo details",
      todoDetails: todoDetails,
    });
};
