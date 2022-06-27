require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

exports.signIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(400)
      .send({ status: false, message: "These fields are required." });
  }

  // if (req.headers.email !== email)
  //   return res.status(400).json({ message: "Authentication failed" });

  const userExists = await User.findOne({ email: email });
  if (!userExists) {
    return res
      .status(400)
      .send({ status: false, message: "No user with this email exists." });
  } else {
    const token = jwt.sign({ email: userExists }, process.env.SECRET_KEY);
    return res
      .status(200)
      .send({
        status: true,
        token: token,
        message: "User logged in",
        data: userExists,
      });
  }
};
