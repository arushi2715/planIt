require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.isValidated = async (req, res, next) => {
  jwt.verify(
    req.headers.token,
    process.env.SECRET_KEY,
    async (err, decoded) => {
      if (err) return res.status(500).send({ message: "error" });
      const user = await User.findOne({ email: decoded.email });
      if (!user) res.status(500).send({ message: "no user" });
      else {
        req.email = decoded.email;
        if (decoded.email != req.body.email)
          return res.status(500).json({ message: "Error occurred" });
      }
      next();
    }
  );
};
