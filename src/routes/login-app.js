import express from 'express';
// import { systemUsers } from '../../models';
import bcrypt from 'bcryptjs';
import { auths, systemUsers, serverConfigurations, userTypes } from '../models';

const router = express.Router();

function validatePassword (res, passDB, password, data) {
  const {
    idSystemUser,
    fullName,
    DBemail
  } = data;

  const comparePass = bcrypt.compareSync(password, passDB);
  if (comparePass) {
    res.json({
      success: true,
      idSystemUser,
      fullName,
      DBemail,
      msg: 'login'
    });
  } else {
    res.json({
      success: false,
      msg: 'No login',
      flag: 'NONpassword'
    });
  }
}

function validateEmail (email, password, res) {
  return systemUsers.findOne({
    where: {
      emailUsername: email
    }
  }).then((login) => {
    if (login) {
      if (login.state) {
        const passDB = login.password;
        const idSystemUser = login.idSystemUser;
        const fullName = `${login.firstName} ${login.firstLastName}`;
        const DBemail = login.emailUsername;
  
        const data = {
          idSystemUser,
          fullName,
          DBemail
        };
        validatePassword(res, passDB, password, data);
      } else {
        res.json({
          msg: 'User disabled, please contact to system administrator',
          success: false,
          flag: 'NONstate'
        });
      }
    } else {
      res.json({
        msg: 'User isn´t register, please contact to system administrator',
        success: false,
        flag: 'NONemail'
      });
    }
  });
}

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  validateEmail(email, password, res);
});

module.exports = router;
