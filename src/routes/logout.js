import express from 'express';
import models from '../models';
import cookie from '../middlewares/coockie-session.js';
import MemcachePlus from 'memcache-plus';
const router = express.Router();

function exitUsers (req) {
  const userId = +req.params.id_user;
  return models.crm_auths.find({
    where: {
      id_usuario_sistema: userId
    }
  }).then((auths) => {
    if (auths.estado) {
      return auths.updateAttributes({
        estado: false
      });
    }
  });
}

function liberarModulo (req, res) {
  const idUser = +req.params.id_user;
  const client = new MemcachePlus('localhost');
  // const io = require('socket.io')(server);
  client
    .get('modulos')
    .then((modulos) => {
      // SE ENCONTRO RESULTADOS EN MEMCACHED
      // se busca el index del modulo que el usuario a seleccionado
      const index = modulos.findIndex(v => { return +v.idUsuario === +idUser; });
      // si se encontro el modulo(index)
      if (index !== -1) {
        modulos[index].idUsuario = 0;
        modulos[index].consecutivo = null;
        // se actualiza en memcached
        client
        .replace('modulos', modulos)
        .then(() => {
          console.log(`MODULO ID:${modulos[index].id} LIBERADO`);
          // io.sockets.emit('refresh-modulo', modulos);
          res.clearCookie('sessionId');
          res.json({
            modulos
          });
        })
        .catch(() => {
          console.log(`ERROR LIBERANDO MODULO`);
          res.sendStatus(401);
          res.json({
            modulos
          });
        });
      } else {
        res.clearCookie('sessionId');
        res.send('Cerró sesión');
      }
    });
}

router.put('/:id_user', ...cookie, (req, res) => {
  exitUsers(req).then((data) => {
    if (!data) {
      res.sendStatus(401);
    } else {
      liberarModulo(req, res);
    }
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
