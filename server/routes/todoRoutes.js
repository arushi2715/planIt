const express = require("express");
const router = express.Router();
const { createTodo } = require("../controllers/api/todos/createTodo");
const { deleteTodo } = require("../controllers/api/todos/deleteTodo");
const { getTodo } = require("../controllers/api/todos/getTodo");
const { getTodos } = require("../controllers/api/todos/getTodos");
const { isValidated } = require("../middlewares/isValidated");
const { updateTodo } = require("../controllers/api/todos/updateTodo");

router.post("/createTodo", isValidated, createTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get("/getTodo/:id", getTodo);
router.get("/getTodos", getTodos);
router.patch("/updateTodo/:id", updateTodo);

module.exports = router;
