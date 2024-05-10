const User = require("../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const signup = async (req, res) => {
  try {
    await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log("Error", err);
    res.json({ status: "error", error: "Duplicate Email" });
  }
};

const login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    if (user.password !== req.body.password) {
      return res.json({ status: "Wrong Password", user: false });
    }
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.SECERT_KEY
    );
    return res.json({ status: "ok", user: true, token: token });
  } else {
    return res.json({ status: "Email doesn't exists", user: false });
  }
};

module.exports = { signup, login };
