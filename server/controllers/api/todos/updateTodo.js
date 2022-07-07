const express = require("express");
const ObjectId = require("mongoose").Types.ObjectId;
const Todo = require("../../../models/todos");

exports.updateTodo = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(500)
      .json({ status: false, message: "PLease provide a valid Object Id." });
  const todoExists = await Todo.findById({ _id: req.params.id });
  if (!todoExists)
    return res
      .status(400)
      .json({ status: false, message: "NO todo with this id exists." });
  else {
    try {
      const todo = req.body.todo;
      if (!todo)
        return res
          .status(400)
          .json({ status: false, message: "This is a required field" });
      const previousTodo = await Todo.findByIdAndUpdate(
        { _id: req.params.id },
        { todo }
      );
      const updatedTodo = await Todo.findById({ _id: req.params.id });
      return res.status(200).json({
        status: true,
        message: "Your todo is updated",
        previousTodo,
        updatedTodo,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
};
