import express from 'express';
import { systemUsers } from '../../models';
import bcrypt from 'bcryptjs';

const router = express.Router();

function validatePassword (res, passDB, password, data) {
  const {
    id_usuario,
    nombre,
    DBemail
  } = data;

  const comparePass = bcrypt.compareSync(password, passDB);
  if (comparePass) {
    res.json({
      success: true,
      id_usuario,
      nombre,
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
      const passDB = login.password;
      const idUsuario = login.idSystemUser;
      const nombre = `${login.firstName} ${login.firstLastName}`;
      const DBemail = login.emailUsername;

      const data = {
        idUsuario,
        nombre,
        DBemail
      };
      validatePassword(res, passDB, password, data);
    } else {
      res.json({
        msg: 'El usuario no existe',
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
