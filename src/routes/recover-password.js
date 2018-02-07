import express from 'express';
import { systemUsers } from '../models';
import cfg from '../config/config-jwt';
// import jwt from 'jwt-simple';
import bcrypt from 'bcryptjs';
import emails from '../controllers/email_reset_pass';
// import jwt from '../middlewares/jwt';
import cookie from '../middlewares/coockie-session.js';
import jwt from 'jsonwebtoken';
import kg from '../global/key';
import jwtAccess from '../middlewares/jwt';

const router = express.Router();

const jwtPayload = (data) => {
  const { req, res, usuario } = data;
  const token = jwt.sign(kg.kg(), cfg.jwtSecret);
  const sendData = {
    req, res, usuario, token
  };
  emails.email(sendData);
};

// request to recover password
router.get('/:email', (req, res) => {
  const email = req.params.email;
  // mira si el usuario existe
  systemUsers.find({
    attributes: ['emailUsername', 'idSystemUser', 'idCompany'],
    where: {
      emailUsername: email
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
        msg: `The email ${email} is not registered in the system`
      });
    }
  });
});

router.put('/update/:id_user', ...cookie, (req, res) => {
  const newPassword = req.body.newPassword;
  const currentPassword = req.body.currentPassword;

  // validates that user exists
  systemUsers.findOne({
    attributes: ['emailUsername', 'idSystemUser', 'idCompany', 'password'],
    where: {
      idSystemUser: req.params.id_user
    }
  }).then((usuario) => {
    const comparePass = bcrypt.compareSync(currentPassword, usuario.password);
    if (comparePass) {
      // current password and user password match
      return usuario.updateAttributes({
        password: bcrypt.hashSync(newPassword, 8)
      })
      .then((info) => {
        res.json({
          success: true,
          msg: 'Password updated',
          info
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          msg: 'Error updating',
          err
        });
      });
    } else {
      res.json({
        msg: 'Current password no match',
        success: false
      });
    }
  })
  .catch(err => {
    res.json({
      msg: 'User no founded',
      success: false,
      err
    });
  });
});

// falta midleware. se ingresa la contraseña por primera vez. El token viene por url
router.put('/reset', (req, res) => {
  const newPassword = req.body.newPassword;
  // mira si el usuario existe
  systemUsers.find({
    attributes: ['emailUsername', 'idSystemUser', 'idCompany'],
    where: {
      idSystemUser: req.body.id_user
    }
  }).then((usuario) => {
    if (usuario) {
      return usuario.updateAttributes({
        password: bcrypt.hashSync(newPassword, 8),
        state: true
      });
    } else {
      return res.json({
        msg: 'User not found',
        success: false
      });
    }
  }).then(() => {
    res.json({
      success: true,
      msg: 'Password updated'
    });
  }).catch(() => {
    res.json({
      success: false,
      msg: 'Error inserting'
    });
  });
});

// update reset password

router.put('/update-reset', ...jwtAccess, (req, res) => {
  const newPassword = req.body.newPassword;
  // mira si el usuario existe
  systemUsers.find({
    where: {
      idSystemUser: req.body.id_user
    }
  }).then((usuario) => {
    if (usuario) {
      return usuario.updateAttributes({
        password: bcrypt.hashSync(newPassword, 8),
        state: true
      });
    } else {
      return res.json({
        msg: 'User not found',
        success: false
      });
    }
  }).then(() => {
    res.json({
      success: true,
      msg: 'Password updated'
    });
  }).catch(() => {
    res.json({
      success: false,
      msg: 'Error inserting'
    });
  });
});


module.exports = router;
