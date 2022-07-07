const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    //   timestamps:{
    //     required:true
    //   }
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
