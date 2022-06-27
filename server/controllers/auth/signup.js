require("dotenv").config();
const express = require("express");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

exports.signUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res
      .status(400)
      .send({ status: false, message: "These are the required fields." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).send({
      status: false,
      message: "Please provide email in correct format",
    });
  }
  if (!validator.equals(password, confirmPassword)) {
    return res.status(400).send({
      status: false,
      message: "Password and Confirm Password should be the same!",
    });
  }
  try {
    const userExists = await User.exists({ email: email });

    if (userExists) {
      return res.status(400).send({
        status: false,
        message: "User with this email already exists in the database.",
        data: userExists,
      });
    }

    try{

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
 

    jwt.sign({ email: newUser.email }, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        return res.status(500).send({ status: false, message: err.message });
      } else {
        console.log(token);
        return res.status(200).send({
          status: true,
          message: "User signed up successfully",
          data: newUser,
          token: token,
        });
      }
    })
    ;
  }catch(err){
    res.status(500).json({message:err.message})
  }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// test user details
// {
//     "name":"seconduser",
//     "email":"seconduseraa@gmail.com",
//     "password":"seconduser",
//     "confirmPassword":"seconduser"
// }
// token-- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlY29uZHVzZXJhYUBnbWFpbC5jb20iLCJpYXQiOjE2NTYxMzQ2NzN9.kX5CngAfMqB0myrS6Ie5yornBZ4a7uC03eqLou1_pGo
