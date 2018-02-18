import express from 'express';
// import { systemUsers } from '../../models';
import bcrypt from 'bcryptjs';
import { appUsers } from '../../models';
// import config from '../../config/config-jwt';
// import jwt from 'jsonwebtoken';
// import kg from '../../global/key';

const router = express.Router();

function validatePassword (res, passDB, password, data) {
  const { idSystemUser, fullName, DBemail, DBaddress, avatar } = data;

  const comparePass = bcrypt.compareSync(password, passDB);
  if (comparePass) {
    // const token = jwt.sign(kg.kg(), config.jwtSecret);
    res.json({
      success: true,
      idSystemUser,
      fullName,
      DBemail,
      DBaddress,
      avatar,
      msg: 'login'
      // token
    });
  } else {
    res.json({
      success: false,
      msg: 'Usuario y contraseña no coinciden ',
      flag: 'NONpassword'
    });
  }
}

function validateEmail (email, password, res) {
  return appUsers
    .findOne({
      where: {
        emailUsername: email
      }
    })
    .then(login => {
      if (login) {
        if (login.state) {
          const passDB = login.password;
          const idSystemUser = login.idAppUser;
          const fullName = `${login.firstNameUser} ${login.lastNameUser}`;
          const DBemail = login.emailUsername;
          const DBaddress = login.addressUser;
          const avatar = login.avatar;

          const data = {
            idSystemUser,
            fullName,
            DBemail,
            DBaddress,
            avatar
          };
          validatePassword(res, passDB, password, data);
        } else {
          res.json({
            msg: 'Usuario deshabilitado, Por favor contacte a soporte',
            success: false,
            flag: 'NONstate'
          });
        }
      } else {
        res.json({
          msg: 'El usaurio no está registrado',
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
