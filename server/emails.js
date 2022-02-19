// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);

function sendEmail(email, message) {
  const msg = {
    to: `${email}`, // Change to your recipient
    from: 'chhokaradarsh@gmail.com', // Change to your verified sender
    subject: 'GitCareers - Job Postings',
    text: `${message}`,
    html: `<strong>${message}</strong>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
}

exports.sendEmail = sendEmail;
