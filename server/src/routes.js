const { transporter, mailOptions } = require('./config/mailer');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/send_email', [
  body('option').not().isEmpty().trim().escape(),
  body('name').not().isEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('description').not().isEmpty().trim().escape(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { option, name, email, description } = req.body;
  const emailContext = { option, name, email, description };
  transporter.sendMail(mailOptions(emailContext), (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    res.sendStatus(200);
  });
});

module.exports = router;
