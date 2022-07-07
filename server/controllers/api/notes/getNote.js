const express=require("express");
const ObjectId = require("mongoose").Types.ObjectId;
const Note=require("../../../models/notes");

exports.getNote=async(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).json({message:"Please provide a valid object id."})
    else{
        const noteExists=await Note.findById({_id:req.params.id});
        if(!noteExists)
        return res.status(500).json({message:"No note with this id exists"})
    }
       const noteDetails= await Note.findById({_id:req.params.id});
      return res.status(200).json({message:"This is the note",note:noteDetails});
}