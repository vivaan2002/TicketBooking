const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'extremecoder2002@gmail.com',
        pass: 'Coder#2907'
    }
  });

exports.mailsender = function (mail_id,subject,content) {
    let mailDetails = {
        from: 'extremecoder2002@gmail.com',
        to: mail_id,
        subject: subject,
        text: content
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs',err);
        } else {
            console.log('Email sent successfully');
        }
    });
};