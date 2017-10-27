import express from 'express';
import { AUTH_COOKIES, SYSTEM_USERS, SERVER_CONFIGURATIONS } from '../models';
import uuidV4 from 'uuid/v4';
import bcrypt from 'bcryptjs';

const sequelize = require('../models/index').sequelize;
const router = express.Router();

function createUuid (usrId, sessionId) {
  return AUTH_COOKIES.find({
    where: {
      ID_SYSTEM_USER: usrId
    }
  })
    .then((auths) => {
      if (auths) {
        return auths.updateAttributes({
          session_uuid: sessionId,
          estado: true
        });
      } else {
        return sequelize.transaction(
          t => {
            return AUTH_COOKIES.create({
              ID_SYSTEM_USER: usrId,
              SESSION_UUID: sessionId
            }, { transaction: t });
          }
        );
      }
    });
}

function validate (loginData, res) {
  const { email, password } = loginData;
  const sessionId = uuidV4();
  SYSTEM_USERS.find({
    where: {
      EMAILUSERNAME: email
    }
  }).then((userlogin) => {
    if (userlogin === null) {
      res.json({
        success: false,
        msg: 'User not active, please contact to system administrator'
      });
    } else if (!userlogin.estado) {
      res.json({
        success: false,
        msg: 'Inactive user, please contact to system administrator'
      });
    } else {
      const userInfo = {
        ID_SYSTEM_USER: userlogin.ID_SYSTEM_USER,
        NAMES: `${userlogin.FIRST_NAME} ${userlogin.SECOND_NAME}`,
        SURNAMES: `${userlogin.FIRST_LASTNAME} ${userlogin.SECOND_LASTNAME}`,
        EMAILUSERNAME: userlogin.EMAILUSERNAME,
        ID_USER_TYPE: userlogin.ID_USER_TYPE
      };
      const comparePass = bcrypt.compareSync(password, userlogin.PASSWORD);
      if (comparePass && userlogin.emailusername === email) {
        createUuid(userlogin.ID_SYSTEM_USER, sessionId).then(() => {
          SERVER_CONFIGURATIONS.findAll({
            attributes: ['nombre_variable', 'valor']
          }).then((conf) => {
            userInfo.config = conf;
            res.cookie('sessionId', sessionId, { domain: 'localhost' })
              .json({
                success: true,
                userInfo
              });
          });
        }).catch((err) => {
          res.json({
            success: false,
            msg: 'error' + err
          });
        });
      } else {
        res.json({
          success: false,
          msg: 'El usuario y la contraseña no conincide'
        });
      }
    }
  }).catch(() => {
    res.json({
      success: false,
      msg: 'Error, por favor contactese con el administrador del sistema'
    });
  });
}

router.post('/', (req, res) => {
  const loginData = {
    email: req.body.email,
    password: req.body.password
  };
  if (req.body.email && req.body.password) {
    validate(loginData, res);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
