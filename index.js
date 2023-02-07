const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)

// var nodemailer = require('nodemailer');

// var express = require('express')
// var app = express()

// const PORT = process.env.PORT || 3000

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'siremar.project@gmail.com',
//     pass: 'siremar.admin'
//   }
// });

// app.get('/', function(req, res) {
//     console.log(req.query)
//     var mailOptions = {
//       from: 'siremar.project@gmail.com',
//       to: 'siremar.project@gmail.com',
//       subject: req.query.subject,
//       text: req.query.message
//     };


//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log(error);
//         res.send('error')
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.send('sent')
//       }
//     });
// })

// app.get('/signup', function(req, res) {
  
//     var mailOptions = {
//       from: 'siremar.project@gmail.com',
//       to: req.query.to,
//       subject: req.query.subject,
//       text: req.query.message
//     };


//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log(error);
//         res.send('error')
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.send('sent')
//       }
//     });

    
// })

// app.listen(PORT, function(req, res) {
//     console.log("listen at ", PORT);
// });
