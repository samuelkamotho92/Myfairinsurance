const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const sendEmail = async options => {
  // 1) Create a transporter
  const transport = nodemailer.createTransport(smtpTransport({
    host: "smtp.gmail.com",
    port:process.env.EMAIL_PORT,
    ciphers: "SSLv3",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_USERPASSWORD
    },
    tls:{
      rejectUnauthorized:false
  },
  connectionTimeout: 5 * 60 * 1000,
  }));

  // 2) Define the email options
  const mailOptions = {
    from: 'samuelkamotho47@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };
  // 3) Actually send the email
  await transport.sendMail(mailOptions,(err,data)=>{
    if(err){
      console.log(err)
    }else{
      console.log('data sent successfuly',data);
    }
  });
};

module.exports = sendEmail;
// const nodeMailer = require('nodemailer');
// let transporter = nodeMailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 587, false for other ports
//     requireTLS: true,
//     auth: {
//         user: process.env.EMAIL_USERNAME, 
//         pass: process.env.EMAIL_USERPASSWORD, 
//     },
// });

// let mailOptions = {
//     from: 'samuelkamotho47@gmail.com',
//     to: 'samuelkamotho92@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//        console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
//   });

//client id
  // 1043090558928-d9v2ek0ukmuoafpvufiolfc506ljfoqo.apps.googleusercontent.com
//1043090558928-d9v2ek0ukmuoafpvufiolfc506ljfoqo.apps.googleusercontent.com
  //client sec
  // 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