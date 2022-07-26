const nodemailer = require('nodemailer');
const sendEmail = async options => {
  // 1) Create a transporter
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5581d606d78480",
      pass: "ad934b55d88e61"
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Samuel  Kamotho <samuelkamotho92@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // 3) Actually send the email
  await transport.sendMail(mailOptions);
};

module.exports = sendEmail;
