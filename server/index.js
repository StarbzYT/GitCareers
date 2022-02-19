// import email function to send emails for POST
const mail = require('./emails');
const express = require('express');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());
// post request to send email to user
// email service
app.post('/email', (req, res) => {
  // send back email to user
  const email = req.body.email;
  console.log(email);
  res.send(mail.sendEmail(email, 'hello from gitcareers'));
});

// listen on port 5500
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
