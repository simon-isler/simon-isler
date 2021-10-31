const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
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
