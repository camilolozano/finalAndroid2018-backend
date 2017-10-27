import express from 'express';
import models from '../models';
import cfg from '../config/config-jwt';
import jwt from 'jwt-simple';
const auth = require('../auth.js')();
import bcrypt from 'bcryptjs';
import emails from '../controllers/email_reset_pass';

const router = express.Router();

const jwtPayload = (data) => {
  const { req, res, usuario } = data;
  const payload = {
    id: usuario.id_usuario_sistema
  };
  const token = jwt.encode(payload, cfg.jwtSecret);

  const sendData = {
    req, res, usuario, token
  };

  emails.email(sendData);
};

router.get('/:email', (req, res) => {
  const email = req.params.email;
  // mira si el usuario existe
  models.crm_usuarios_sistemas.find({
    attributes: ['emailusername', 'id_usuario_sistema', 'id_empresa'],
    where: {
      emailusername: email
    }
  }).then((usuario) => {
    if (usuario) {
      const data = {
        req,
        res,
        usuario
      };
      jwtPayload(data);
    } else {
      res.json({
        success: false,
        msg: `El correo ${email} no está registrado en el sistema`
      });
    }
  });
});

router.put('/reset', auth.authenticate(), (req, res) => {
  const newPassword = req.body.newPassword;
  // mira si el usuario existe
  models.crm_usuarios_sistemas.find({
    attributes: ['emailusername', 'id_usuario_sistema', 'id_empresa'],
    where: {
      id_usuario_sistema: req.body.id_user
    }
  }).then((usuario) => {
    if (usuario) {
      return usuario.updateAttributes({
        password: bcrypt.hashSync(newPassword, 8)
      });
    } else {
      return res.json({
        msg: 'Usuario no encontrado',
        success: false
      });
    }
  }).then(() => {
    res.json({
      success: true,
      msg: 'Contraseña actualizada'
    });
  }).catch(() => {
    res.json({
      success: false,
      msg: 'Error en la consulta'
    });
  });
});

module.exports = router;
