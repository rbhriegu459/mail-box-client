const Email = require("../model/mails");

const getMails = async (req, res) => {
    try{
        const mails = await Email.find({recipientEmail : req.body.email});
        if(mails){
            res.json({ status: "ok", mails:mails });
        } else{
            res.json({status:"error", mails:"No mails"});
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = getMails;