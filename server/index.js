const express = require("express");
const {connectToMongoDB} = require('./utils/database');
const cors = require('cors');
const { signup, login } = require("./controllers/user");
const { sendEmail } = require("./controllers/email");
const getMails = require("./controllers/inbox");
const Port = 2000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/signup', signup);
app.use('/login', login);
app.use('/email/send', sendEmail);
app.use('/inbox', getMails);

connectToMongoDB()
.then(() => {
    app.listen(Port, () => {
        console.log(`Server running at port ${Port}`);
    })
})

