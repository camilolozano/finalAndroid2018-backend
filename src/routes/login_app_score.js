import express from 'express';
import { SYSTEM_USERS } from '../../models';
import bcrypt from 'bcryptjs';

const router = express.Router();

function validateEmail (email, password, res) {
  return SYSTEM_USERS.findOne({
    where: {
      EMAILUSERNAME: email
    }
  }).then((login) => {
    if (login) {
      const passDB = login.password;
      const idUsuario = login.id_usuario_sistema;
      const nombre = `${login.nombre1} ${login.apellido1}`;
      const DBemail = login.emailusername;

      const data = {
        idUsuario,
        nombre,
        DBemail
      }
      validatePassword(res, passDB, password, data);
    } else {
      res.json({
        msg: 'El usuario no existe',
        success: false,
        flag: 'NONemail'
      })
    }
  });
}

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
      msg: 'login',
    });
  } else {
    res.json({
      success: false,
      msg: 'No login',
      flag: 'NONpassword'
    });
  }
}

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  validateEmail(email, password, res);
});

module.exports = router;
