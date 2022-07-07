const express = require("express");
const jwt = require("jsonwebtoken");
const Todo = require("../../../models/todos");

exports.getTodos = async (req, res) => {
  jwt.verify(
    req.headers.token,
    process.env.SECRET_KEY,
    async (err, decoded) => {
      if (err)
        return res.status(500).json({ status: false, message: err.message });
      else {
        try {
          const todos = await Todo.find({ email: decoded.email });
          if (!todos)
            return res
              .status(400)
              .json({
                status: false,
                message:
                  "You don't have any tasks yet. Its a good time to start.",
              });
          else {
            return res
              .status(200)
              .json({
                status: true,
                message: "These are your todos.",
                todos: todos,
              });
          }
        } catch (err) {
            console.log("hyee");
          return res.status(400).json({ status: false, message: err.message });
        }
      }
    }
  );
};
