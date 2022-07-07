const express = require("express");
const jwt = require("jsonwebtoken");
const Todo = require("../../../models/todos");

exports.createTodo = async (req, res) => {
  jwt.verify(
    req.headers.token,
    process.env.SECRET_KEY,
    async (err, decoded) => {
      if (err) return res.status(500).json({ message: err.message });
      else {
        const email = decoded.email;
        const todo = req.body.todo;

        if (!todo)
          return res
            .status(400)
            .json({ status: false, message: "This is a required field" });
        try {
          const newTodo = new Todo({
            todo: todo,
            email: email,
          });
          newTodo.save();
          return res
            .status(200)
            .json({ status: true, message: "New todo added",todo:newTodo });
        } catch (err) {
          return res
            .status(400)
            .json({
              status: false,
              message: "Some error occurred! Please try again.",
            });
        }
      }
    }
  );
};
