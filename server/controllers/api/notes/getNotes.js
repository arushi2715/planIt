const express = require("express");
const jwt = require("jsonwebtoken");
const Note = require("../../../models/notes");

exports.getNotes = async (req, res) => {
  try {
    jwt.verify(
      req.headers.token,
      process.env.SECRET_KEY,
      async (err, decoded) => {
        if (err) {
          return res.status(400).json({ status: false, message: err.message });
        } else {
          try {
            const notes = await Note.find({ email: decoded.email });
            if (!notes)
              res
                .status(400)
                .json({
                  status: false,
                  message:
                    "You haven't taken any notes yet.Its a good time to start today!",
                });
            else
              res
                .status(200)
                .json({
                  status: true,
                  message: "These are your notes.",
                  notes: notes,
                });
          } catch (err) {
            console.log("hyee");
            return res
              .status(500)
              .json({ sttaus: false, message: err.message });
          }
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
