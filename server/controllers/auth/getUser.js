const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

exports.getUser = async (req, res) => {
  jwt.verify(
    req.headers.token,
    process.env.SECRET_KEY,
    async (err, decoded) => {
      if (err)
        return res.status(500).json({ status: false, message: err.message });
      else {
        try {
          const userExists = await User.find({ email: decoded.email }).select(
            "name"
          );
          return res
            .status(200)
            .json({
              status: true,
              message: "These are the details of user",
              userExists,
            });
        } catch (err) {
          return res.status(500).json({ status: false, message: err.message });
        }
      }
    }
  );
};
