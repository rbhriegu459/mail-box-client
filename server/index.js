const express = require("express");
const {connectToMongoDB} = require('./utils/database');
const cors = require('cors');
const User = require('./model/user');
const Port = 2000;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
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
});

connectToMongoDB()
.then(() => {
    app.listen(Port, () => {
        console.log(`Server running at port ${Port}`);
    })
})

