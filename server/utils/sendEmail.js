const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "jasem.jasemi.falafel@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

async function sendEmail(client, subject, text) {
  const mailOptions = {
    from: "jasem.jasemi.falafel@gmail.com <Fullstack App>",
    to: client,
    subject: subject,
    text: text,
  };
  try {
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = sendEmail;
