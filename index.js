// const express = require('express')
// const app = express()
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })
// app.listen(process.env.PORT || 3000)

var nodemailer = require('nodemailer');

var express = require('express')
var app = express()

const PORT = process.env.PORT || 3000

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wdm.pro.adm.gmail.com',
    pass: 'nzdvjkfndveaazif'
  }
});

app.get('/', function(req, res) {
    console.log(req.query)
    var mailOptions = {
      from: 'wdm.pro.adm.gmail.com',
      to: 'wdm.pro.adm.gmail.com',
      subject: req.query.subject,
      text: req.query.message
    };


    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send('error')
      } else {
        console.log('Email sent: ' + info.response);
        res.send('sent')
      }
    });
})

app.get('/signup', function(req, res) {
  
    var mailOptions = {
      from: 'wdm.pro.adm.gmail.com',
      to: req.query.to,
      subject: req.query.subject,
      text: req.query.message
    };


    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send('error')
      } else {
        console.log('Email sent: ' + info.response);
        res.send('sent')
      }
    });

    
})

app.listen(PORT, function(req, res) {
    console.log("listen at ", PORT);
});
