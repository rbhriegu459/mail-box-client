const Email = require("../model/mails");

const sendEmail = async (req, res) => {
  try {
    await Email.create({
      senderEmail: req.body.senderEmail,
      recipientEmail: req.body.recipientEmail,
      subject: req.body.subject,
      body: req.body.body,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log("Error", err);
    res.json({ status: "error", error: "Mail not stored" });
  }
};

module.exports = { sendEmail };
