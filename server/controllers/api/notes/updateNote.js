const express = require("express");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongoose").Types.ObjectId;
const Note = require("../../../models/notes");

exports.updateNote = async (req, res) => {
  try {
    jwt.verify(
      req.headers.token,
      process.env.SECRET_KEY,
      async (err, decoded) => {
        if (err) res.status(500).json({ message: err.message });
        else {
          const { content, title } = req.body;
          if (!content && !title)
            return res
              .status(400)
              .json({ message: "Please update a single field." });
          try {
            const note = await Note.find({ email: decoded.email });
            if (!note)
              return res.status(400).json({
                message:
                  "You haven't taken any notes yet. Its a good time to start today!",
              });
            else if (!ObjectId.isValid(req.params.id))
              return res
                .status(400)
                .send({ message: "Please provide a valid object id." });
            const previousNote = await Note.findByIdAndUpdate(
              { _id: req.params.id },
              { title, content }
            );
            const updatedNote=await Note.findById({_id:req.params.id});
            console.log(req.params);
            return res.status(200).json({
              message: "Your note is updated",
              previousNote: previousNote,
              updatedNote:updatedNote
            });
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
        }
      }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
