import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

const ENV = process.env.NODE_ENV || 'development';
const CONF = require('../config/config')[ENV];

function sendEmail (sendData) {
  const { res, usuario, token } = sendData;
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

  transporter.use('compile', hbs({ viewPath: 'globalViews/emails/nuevo_usuario', extName: '.hbs' }));

  // Contexto que se pasa a la plantilla html de handlebar para mostrar
  const host = CONF.cliente;
  const endPoint = 'enter-password';
  const idusu = usuario.id_usuario_sistema;

  const objectContext = {
    host,
    endPoint,
    token,
    idusu
  };

  // setup e-mail data, even with unicode symbols
  const mailOptions = {
    from: 'kamilo92@live.com', // sender address (who sends)
    to: usuario.emailusername, // list of receivers (who receives)
    subject: 'Bienvenido CRM Empopasto', // Subject line
    template: 'email', // Template html  y handlebars
    context: objectContext
  };
  // <button href="{{host}}{{end_point}}{{tokenB64}}/{{idusu}}/{{idemp}}">Recuperar contraseña</button>
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({
        success: false,
        msg: 'El correo electrónico no fue enviado' + error
      });
    }
    res.json({
      success: true,
      msg: 'Usuario creado exitosamente'
    });
  });
};

exports.email = (sendData) => {
  sendEmail(sendData);
};
