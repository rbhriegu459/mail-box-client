const mongoose = require("mongoose");

const Email = new mongoose.Schema(
  {
    senderEmail: { type: String, required: true},
    recipientEmail: { type: String, required: true },
    subject: { type: String},
    body:{ type: String, required:true}
  },
  {
    collection: "emails",
  }
);

const model = mongoose.model("Emails", Email);

module.exports = model;
