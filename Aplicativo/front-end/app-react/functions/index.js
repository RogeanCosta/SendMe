'use strict';
const functions  = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

let url = {    
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: 'xtrsmk@gmail.com',
        pass: 'MISERICORDIA123'
    }
};
let transporter = nodemailer.createTransport(url);

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    /*let remetente = '"Adson Rocha" <xtrsmk@gmail.com>';

    let assunto = req.body['assunto'];
    let destinatarios = req.body['destinatarios']; // lista de e-mails destinatarios separados por ,
    let corpo = req.body['corpo'];
    let corpoHtml = req.body['corpoHtml'];

    let email = {
        from: remetente,
        to: destinatarios,
        subject: assunto,
        text: corpo,
        html: corpoHtml
    };*/


    var message = {
      from: 'xtrsmk@gmail.com',
      to: 'xtrsmk@gmail.com',
      subject: 'Mais um Pedido SendMe',
      text: 'Issso é um texto!'
  };
  

    transporter.sendMail(message, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Mensagem %s enviada: %s', info.messageId, info.response);
        res.redirect("back");
    });
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
