const nodemailer = require('nodemailer');
const handlebars = require('nodemailer-express-handlebars');
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

transporter.use('compile', handlebars({
  viewEngine: {
    layoutsDir: './api/views/layouts'
  },
  viewPath: './api/views/'
}));

const mailOptions = (templateContext) => {
  return {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_RECIPIENT,
    subject: 'simon-isler | contact',
    template: 'contact_request',
    context: templateContext
  };
};

module.exports = { mailOptions, transporter };
