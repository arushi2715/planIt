// const Router = require("router");
const express=require("express");
const router=express.Router();
const {createNote }= require("../controllers/api/notes/createNote");
// const {isValidated}=require("../middlewares/isValidated");
const {getNotes}=require("../controllers/api/notes/getNotes");
const {updateNote}=require("../controllers/api/notes/updateNote");
const {deleteNote}=require("../controllers/api/notes/deleteNote");

// const router = Router();

router.post("/createNote", createNote);
router.get("/getNotes",getNotes);
router.patch("/updateNote/:id",updateNote);
router.delete("/deleteNote/:id",deleteNote);

module.exports=router;