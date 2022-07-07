const Router=require("router");
// const express=require("express");
// const router=express.Router();
const {signUp}=require("../controllers/auth/signup");
const {signIn}=require("../controllers/auth/signin");
const {isValidated}=require("../middlewares/isValidated");
const {getUser}=require("../controllers/auth/getUser");

const router=Router();

router.post("/signup",signUp);
router.post("/signin",signIn);
router.get("/getUser",isValidated,getUser);

module.exports=router;