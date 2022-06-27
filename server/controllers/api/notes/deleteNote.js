const express = require("express");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongoose").Types.ObjectId;
const Note = require("../../../models/notes");

exports.deleteNote = async (req, res) => {
  try {
    jwt.verify(
      req.headers.token,
      process.env.SECRET_KEY,
      async (err, decoded) => {
        if(err)
        res.status(500).json({message:err.message});
        try{
        if(!ObjectId.isValid(req.params.id))
        return res.status(400).json({message:"Please provide a valid object id."})
        else{
            const noteExists=await Note.findById({_id:req.params.id});
            if(!noteExists)
            return res.status(500).json({message:"No note with this id exists"})
        }
           const deletedNote= await Note.findByIdAndDelete({_id:req.params.id});
           res.status(200).json({message:"Note with this id deleted",deletedNote:deletedNote});

        }catch(err){
            res.status(500).json({message:err.message})
        }
      }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
