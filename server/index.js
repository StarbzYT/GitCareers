// import email function to send emails for POST
const mail = require('./emails');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5500;

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// get data off post request
app.use(bodyParser.urlencoded({ extended: true }));
// middleware for json body (email)
app.use(bodyParser.json());
// serve static files in templates directory
app.use(express.static('../'));

// main page redirect to temples
app.get('/', (req, res) => {
  res.redirect('/templates');
});

// post request to send email to user
// email service
app.post('/email', (req, res) => {
  // send back email to user
  const email = req.body.email;
  const jobsMessage = req.body.message;
  console.log(email);
  console.log(jobsMessage);
  res.send(mail.sendEmail(email, jobsMessage));
});

// listen on port 5500
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
