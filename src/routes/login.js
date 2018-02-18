import express from 'express';
import { auths, systemUsers, serverConfigurations, userTypes, companies } from '../models';
import uuidV4 from 'uuid/v4';
import bcrypt from 'bcryptjs';

const router = express.Router();

function createUuid (usrId, sessionId) {
  return auths.find({
    where: {
      idSystemUser: usrId
    }
  }).then((auth) => {
    if (auth) {
      return auth.updateAttributes({
        sessionUuid: sessionId,
        state: true
      });
    } else {
      return auths.create({
        idSystemUser: usrId,
        sessionUuid: sessionId
      });
    }
  });
}

function validate (loginData, res) {
  const { email, password } = loginData;
  const sessionId = uuidV4();
  systemUsers.find({
    where: {
      emailUsername: email
    },
    include: [{
      model: userTypes
    }]
  }).then((userlogin) => {
    if (userlogin === null) {
      res.json({
        success: false,
        msg: 'User isn´t register, please contact to system administrator'
      });
    } else if (!userlogin.state) {
      res.json({
        success: false,
        msg: 'User disabled, please contact to system administrator'
      });
    } else {
      const userInfo = {
        idSystemUser: userlogin.idSystemUser,
        names: `${userlogin.firstName} ${(userlogin.secondName !== null) ? userlogin.secondName : ''}`,
        surnames: `${userlogin.firstLastName} ${(userlogin.secondLastName !== null ? userlogin.secondLastName : '')}`,
        emailUsername: userlogin.emailUsername,
        idUserType: userlogin.idUserType,
        userTypeDesc: userlogin.userType['description'],
        idCompany: userlogin.idCompany
      };
      companies.find({
        where: {
          idCompany: userlogin.idCompany
        }
      }).then((company) => {
        userInfo.nameBusiness = company.nameBusiness;
        const comparePass = bcrypt.compareSync(password, userlogin.password);
        if (comparePass && userlogin.emailUsername === email) {
          createUuid(userlogin.idSystemUser, sessionId).then(() => {
            serverConfigurations.findAll({
              attributes: ['nameVariable', 'value']
            }).then((conf) => {
              // Configurate databse
              userInfo.config = conf;
              res.cookie('sessionId', sessionId, { domain: 'localhost' })
                .json({
                  success: true,
                  userInfo
                });
            });
          }).catch((Err) => {
            res.json({
              success: false,
              msg: 'Error, please contact to system administrator'
            });
          });
        } else {
          res.json({
            success: false,
            msg: 'Email and password aren\'t valid'
          });
        }
      });
    }
  }).catch((err) => {
    console.log(err);
    res.json({
      success: false,
      msg: 'Error, please contact to system administrator'
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
