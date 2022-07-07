const jwt = require("jsonwebtoken");
const Note = require("../../../models/notes");


exports.createNote = async (req, res) => {
  jwt.verify(
    req.headers.token,
    process.env.SECRET_KEY,
    async (err, decoded) => {
      if (err) res.status(500).json({ message: err.message });
      else {
        const email = decoded.email;
        const { title, content } = req.body;
        if ( !title || !content)
          return res.status(400).json({ message: "All fields are required." });

        try {
          // const noteExists = await Note.exists({ email });
          // if (!noteExists)
          //   return res
          //     .status(400)
          //     .json({status:false, message: "No note with this email exists." });
          const note = new Note({
            email: email,
            title: title,
            content: content,
          });

          note.save();
          return res.status(200).json({
            message: "Note created successfully",
            noteDetails: note,
          });
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      }
    }
  );
};
