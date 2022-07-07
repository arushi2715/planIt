const express=require("express");
const router=express.Router();

const {getBlogs}=require("../controllers/api/blogs/getBlogs");

router.get("/getBlogs",getBlogs);

module.exports=router;