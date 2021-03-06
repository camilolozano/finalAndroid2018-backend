import express from 'express';
import cookie from '../middlewares/coockie-session.js';
import { systemUsers, userTypes } from '../models';
import bcrypt from 'bcryptjs';
import emails from '../controllers/email_new_user';
// import jwt from 'jwt-simple';

// import cfg from '../config/config-jwt';
import config from '../config/config-jwt';
import jwt from 'jsonwebtoken';
import kg from '../global/key';

// const auth = require('../auth')();
const router = express.Router();

router.get('/:id_user', ...cookie, (req, res) => {
  res.sendStatus(200);
});

function existIdClient (_identificationCard) {
  return systemUsers
    .findOne({
      where: {
        identificationCard: _identificationCard
      }
    })
    .then(t => {
      const val = !!t;
      return val;
    });
}

function existEmailClient (_correo) {
  return systemUsers
    .findOne({
      where: {
        emailUsername: _correo.toLowerCase()
      }
    })
    .then(t => {
      const val = !!t;
      return val;
    });
}

// Actualizar la información de un usuario
router.put('/upd_user_info/:id_user&:id_user_update', async (req, res) => {
  systemUsers
    .find({
      where: {
        idSystemUser: req.params.id_user_update
      }
    })
    .then(data => {
      return data.update({
        userCode: req.body.userCode,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        firstLastName: req.body.firstLastName,
        secondLastName: req.body.secondLastName,
        identificationCard: req.body.identificationCard,
        idUserType: req.body.IDUserType,
        contactNumber: req.body.contactNumber,
        identificationType: req.body.identificationType,
        state: req.body.state,
        emailUsername: req.body.emailUsername.toLowerCase()
      });
    })
    .then(() => {
      res.json({
        msg: 'Successfully updated user',
        success: true
      });
    })
    .catch(() => {
      res.json({
        msg: 'Error updating ',
        success: false
      });
    });
});

// Crear usuario ========================================
const jwtPayload = data => {
  const { req, res, user } = data;
  // const payload = {
  //   id: user.idSystemUser
  // };
  // const token = jwt.encode(payload, cfg.jwtSecret);
  const token = jwt.sign(kg.kg(), config.jwtSecret);
  const sendData = {
    req,
    res,
    user,
    token
  };
  emails.email(sendData);
};

router.post('/create/:id_user&:idCompany', ...cookie, async (req, res) => {
  const isIdentification = await existIdClient(req.body.identificationCard);
  const isEmail = await existEmailClient(req.body.emailUsername);

  if (isIdentification) {
    res.json({
      success: false,
      msg: 'Identification number already registered, verify the information'
    });
  } else if (isEmail) {
    res.json({
      success: false,
      msg: 'Email already registered, verify the information'
    });
  } else {
    systemUsers
      .find({
        where: {
          userCode: req.body.userCode
        }
      })
      .then(data => {
        if (data) {
          res.json({
            msg: 'The code was already assigned to another user',
            success: false
          });
        } else {
          systemUsers
            .create({
              userCode: req.body.userCode,
              firstName: req.body.firstName,
              secondName: req.body.secondName,
              firstLastName: req.body.firstLastName,
              secondLastName: req.body.secondLastName,
              emailUsername: req.body.emailUsername.toLowerCase(),
              // Se da un caracter provicional para el psw
              password: bcrypt.hashSync('admin123', 8),
              idUserType: req.body.idUserType,
              contactNumber: req.body.contactNumber,
              idCompany: req.params.idCompany,
              identificationCard: req.body.identificationCard,
              identificationType: req.body.identificationType
            })
            .then(user => {
              const data = {
                req,
                res,
                user
              };
              jwtPayload(data);
            })
            .catch(err => {
              res.json({
                success: false,
                msg: 'I do not think user ' + err
              });
            });
        }
      });
  }
});

router.get('/buscar_usu/:id_user', ...cookie, (req, res) => {
  systemUsers
    .findAll({
      attributes: ['idSystemUser', 'userCode', 'firstName', 'firstLastName']
    })
    .then(user => {
      res.json({
        data: user,
        success: true
      });
    })
    .catch(() => {
      res.json({
        msg: 'error',
        success: false
      });
    });
});

// TIpo usaurios
router.get('/tipo_user/:id_user', ...cookie, (req, res) => {
  userTypes
    .findAll()
    .then(userTypes => {
      res.json({
        data: userTypes,
        success: true
      });
    })
    .catch(() => {
      res.json({
        msg: 'error',
        success: false
      });
    });
});

// Contador de todos los usuarios registrados
router.get('/list_user_count/:id_user', ...cookie, (req, res) => {
  systemUsers
    .findAll({
      attributes: ['idSystemUser'],
      where: {
        idSystemUser: {
          $ne: 1
        }
      },
      include: [
        {
          attributes: ['description'],
          model: userTypes
        }
      ]
    })
    .then(data => {
      res.json({
        data: data.length,
        success: true
      });
    })
    .catch(err => {
      res.json({
        msg: 'error ' + err,
        success: false
      });
    });
});

// listar a todos los usuarios
router.get('/list-users/:id_user', ...cookie, (req, res) => {
  systemUsers
    .findAll({
      attributes: [
        'idSystemUser',
        'userCode',
        'firstName',
        'secondName',
        'firstLastName',
        'secondLastName',
        'emailUsername',
        'idUserType',
        'state',
        'contactNumber',
        'identificationCard',
        'identificationType'
      ],
      where: {
        idSystemUser: {
          $ne: 1
        }
      },
      include: [
        {
          attributes: ['description'],
          model: userTypes
        }
      ],
      order: ['description']
    })
    .then(data => {
      res.json({
        data
      });
    })
    .catch(() => {
      res.json({
        success: false
      });
    });
});

// Ver toda la información de un usuario
router.get('/user_info/:id_user&:id_user_sis', ...cookie, (req, res) => {
  systemUsers
    .find({
      where: {
        idSystemUser: req.params.id_user
      },
      include: [
        {
          attributes: ['descripcion'],
          model: userTypes
        }
      ]
    })
    .then(data => {
      res.json({
        data,
        success: true
      });
    })
    .catch(err => {
      res.json({
        msg: 'error ' + err,
        success: false
      });
    });
});

// actualizar el estado de un usaurio
router.put('/upd_user/:id_user', ...cookie, (req, res) => {
  const state = !req.body.state;
  systemUsers
    .find({
      where: {
        idSystemUser: req.body.idSystemUser
      }
    })
    .then(u => {
      return u.updateAttributes({
        state
      });
    })
    .then(e => {
      res.json({
        msg: 'Successfully updated user',
        success: true,
        estado: e.state
      });
    })
    .catch(() => {
      res.json({
        msg: 'Error updating',
        success: false
      });
    });
});

module.exports = router;
