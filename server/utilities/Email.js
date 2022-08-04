const nodemailer = require('nodemailer');
const sendEmail = async options => {
  // 1) Create a transporter
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_USERPASSWORD
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Samuel  Kamotho <samuelkamotho47@gmail.com>',
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
      console.log('data sent successfuly');
    }
  });
};

module.exports = sendEmail;
