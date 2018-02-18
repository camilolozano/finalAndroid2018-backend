import express from 'express';
import { appUsers } from '../../models';
import bcrypt from 'bcryptjs';
import emails from '../../controllers/email_new_user';

import config from '../../config/config-jwt';
import jwt from 'jsonwebtoken';
import kg from '../../global/key';

const router = express.Router();

// Crear usuario ========================================

function existEmailClient (email) {
  return appUsers.findAll({
    where: {
      emailUsername: email
    }
  })
  .then(t => {
    if (t.length >= 1) {
      return true;
    } else {
      return false;
    }
  });
}

const jwtPayload = data => {
  const { req, res, user } = data;
  const token = jwt.sign(kg.kg(), config.jwtSecret);
  const sendData = {
    req,
    res,
    user,
    token
  };
  emails.email(sendData);
};

// Enviar token ...
router.post('/create', async (req, res) => {
  const isEmail = await existEmailClient(req.body.emailUsername);
  if (isEmail) {
    res.json({
      success: false,
      msg: 'El correo ya fue registrado'
    });
  } else {
    appUsers.create({
      firstNameUser: req.body.firstNameUser,
      lastNameUser: req.body.lastNameUser,
      addressUser: req.body.addressUser,
      contactUser: req.body.contactUser,
      password: bcrypt.hashSync(req.body.password, 8),
      emailUsername: req.body.emailUsername.toLowerCase(),
      state: false
    })
    .then(user => {
      const data = {
        req,
        res,
        user
      };
      jwtPayload(data);
    })
    .catch(() => {
      res.json({
        success: false,
        msg: 'Error, usuario no creado'
      });
    });
  }
});

// Validación de existencia de correo electrónico
router.get('/validate-email/:email', async (req, res) => {
  const isEmail = await existEmailClient(req.params.email);
  if (isEmail) {
    res.json({
      success: true,
      msg: 'El correo fue registrado'
    });
  } else {
    res.json({
      success: false,
      msg: 'El correo no ha sido registrado'
    });
  }
});

module.exports = router;
