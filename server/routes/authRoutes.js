const Router=require("router");
// const express=require("express");
// const router=express.Router();
const {signUp}=require("../controllers/auth/signup");
const {signIn}=require("../controllers/auth/signin");
const {isValidated}=require("../middlewares/isValidated");

const router=Router();

router.post("/signup",signUp);
router.post("/signin",isValidated,signIn);

module.exports=router;