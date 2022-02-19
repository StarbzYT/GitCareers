// import email function to send emails for POST
const mail = require('./emails');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5500;

// get data off post request
app.use(bodyParser.urlencoded({ extended: true }));
// post request to send email to user
// email service
app.post('/email', (req, res) => {
  // send back email to user
  const email = req.body;
  res.send(mail.sendEmail(email, 'hello from gitcareers'));
});

// listen on port 5500
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
