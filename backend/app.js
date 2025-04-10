const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const {GMAIL_USER,GMAIL_PASS } = require('./config');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { email, message, subject } = req.body;

  const sendingEmail = 'pradnyasahajrao8484@gmail.com'; 
  const appPassword = 'sxzx kvmf hvum nbbe';

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false
    },
    auth: {
      user: sendingEmail,
      pass: appPassword
    }
  });

  const mailOptions = {
    from: sendingEmail,
    to: sendingEmail, 
    subject: subject || 'Contact Form Submission',
    html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
