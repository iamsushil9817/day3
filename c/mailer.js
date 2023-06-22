const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'rohityadav787898@gmail.com',
    pass: '12345'
  }
});

// Define the email options
const mailOptions = {
  from: 'parshid123@gmil.com',
  to: 'rohityadav787898@gmail.com',
  subject: 'Hello from Nodemailer',
  text: 'This is a test email sent using Nodemailer.'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});