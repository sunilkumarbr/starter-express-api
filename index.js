var nodemailer = require('nodemailer');

var express = require('express')
var app = express()

const PORT = process.env.PORT || 3000

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wdm.pro.adm@gmail.com',
    pass: 'sgnrduulzedlupvg'
  }
});

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
    console.log(req.query)
    var mailOptions = {
      from: 'wdm.pro.adm@gmail.com',
      to: 'wdm.pro.adm@gmail.com',
      subject: req.query.subject,
      text: req.query.message
    };


    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send({message:'error'})
      } else {
        console.log('Email sent: ' + info.response);
        res.send({message:'sent'})
      }
    });
})

app.get('/signup', function(req, res) {
  
    var mailOptions = {
      from: 'wdm.pro.adm@gmail.com',
      to: req.query.to,
      subject: req.query.subject,
      text: req.query.message
    };


    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send({message:'error'})
      } else {
        console.log('Email sent: ' + info.response);
        res.send({message:'sent'})
      }
    });

    
})

app.get('/mail', function(req, res) {
  
    var mailOptions = {
      from: req.query.from,
      to: req.query.to,
      subject: req.query.subject,
      text: req.query.message
    };


    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send({message:'error'})
      } else {
        console.log('Email sent: ' + info.response);
        res.send({message:'sent'})
      }
    });

    
})

app.listen(PORT, function(req, res) {
    console.log("listen at ", PORT);
});
