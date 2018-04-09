import express from 'express';
import { auths } from '../models';
import cookie from '../middlewares/coockie-session.js';
const router = express.Router();

function userState (req) {
  const userId = +req.params.id_user;
  return auths
    .find({
      where: {
        idSystemUser: userId
      }
    })
    .then(auth => {
      if (auth.estado) {
        return auth.updateAttributes({
          estado: false
        });
      }
    });
}

router.put('/:id_user', ...cookie, (req, res) => {
  userState(req)
    .then(data => {
      res.json({
        success: true,
        msg: 'Good bye'
      });
    })
    .catch(err => {
      res.json({
        success: false,
        msg: 'Can not close session, please contact to system administrator'
      });
    });
});

module.exports = router;
