import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

const ENV = process.env.NODE_ENV || 'development';
const CONF = require('../config/config')[ENV];

function sendEmail (sendData) {
  const { res, user, token } = sendData;
  // Create the transporter with the required configuration for Outlook
  // change the user and pass !
  const transporter = nodemailer.createTransport({

    host: 'smtp-mail.outlook.com', // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: 'SSLv3'
    },
    auth: {
      user: 'kamilo92@live.com',
      pass: 'JuanCamilo'
    }
  });

  transporter.use('compile', hbs({ viewPath: 'globalViews/emails/reset-password', extName: '.hbs' }));

  // Contexto que se pasa a la plantilla html de handlebar para mostrar
  const host = CONF.cliente;
  const endPoint = 'recover-password';
  const idusu = user.idSystemUser;

  const objectContext = {
    host,
    endPoint,
    token,
    idusu
  };
  // setup e-mail data, even with unicode symbols
  const mailOptions = {
    from: 'kamilo92@live.com', // sender address (who sends)
    to: user.emailUsername, // list of receivers (who receives)
    subject: 'Recover password', // Subject line
    template: 'email', // Template html  y handlebars
    context: objectContext
  };
  // <button href="{{host}}{{end_point}}{{tokenB64}}/{{idusu}}/{{idemp}}">Recuperar contraseña</button>
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({
        success: false,
        msg: 'The email was not sent' + error
      });
    }
    res.json({
      success: true,
      msg: 'Mail sent successfully, please check your email'
    });
  });
};

exports.email = (sendData) => {
  sendEmail(sendData);
};
