import express from 'express';
import cookie from '../middlewares/coockie-session.js';
import { systemUsers, companies } from '../models';
import bcrypt from 'bcryptjs';
import emails from '../controllers/email_new_user';
// import jwt from 'jwt-simple';

// import cfg from '../config/config-jwt';
import config from '../config/config-jwt';
import jwt from 'jsonwebtoken';
import kg from '../global/key';
const db = require('../models/index').sequelize;

// const auth = require('../auth')();
const router = express.Router();

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

function transaction (req, res) {
  return db.transaction(t => {
    return companies.create({
      name1Company: req.body.name1Company,
      name2Company: req.body.name2Company,
      last1Company: req.body.last1Company,
      last2Company: req.body.last2Company,
      nameBusiness: req.body.nameBusiness,
      nitCompany: req.body.nitCompany,
      contactCompany: req.body.contactCompany,
      addressCompany: req.body.addressCompany,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      emailCompany: req.body.emailCompany,
      avatarCompany: req.body.id_avatarCompanyempresa
    }, { transaction: t })
      .then((company) => {
        return systemUsers.create({
          idCompany: company.idCompany,
          firstName: req.body.firstName,
          secondName: req.body.secondName,
          firstLastName: req.body.firstLastName,
          secondLastName: req.body.secondLastName,
          emailUsername: req.body.emailUsername.toLowerCase(),
          // Se da un caracter provicional para el psw
          password: bcrypt.hashSync('admin123', 8),
          // idUserType: req.body.idUserType,
          idUserType: 2,
          contactNumber: req.body.contactNumber,
          identificationCard: req.body.identificationCard,
          identificationType: 'ID_NUMBER',
        }, { transaction: t }).then(user => {
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
      });
  }).catch((err) => {
    console.log('---------------------err', err);
  });
}

router.post('/create/:id_user', async (req, res) => {
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
          transaction(req, res);
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

module.exports = router;
