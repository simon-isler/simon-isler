const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailContent = ({ option, name, email, description }) => {
  return `
    <p>New contact request received from simonisler.ch! 😎</p><hr>
    <p>Selected option: ${option}</p>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Description: ${description}</li>
    </ul>
    `;
};

const mailOptions = (params) => {
  return {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_RECIPIENT,
    subject: 'simon-isler | contact',
    html: mailContent(params)
  };
};

module.exports = { mailOptions, transporter };
