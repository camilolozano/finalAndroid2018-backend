import express from 'express';
import models from '../models/index';
import { messages, conversations } from '../models';

const router = express.Router();
const db = models.sequelize;

// Creacion de aceptación a solicitud de producto
function transactionChat (req) {
  return db.transaction(t => {
    return conversations
      .create(
      {
        idDocument: req.body.idDocument
      },
        { transaction: t }
      )
      .then(msj => {
        return messages
          .create(
          {
            message: req.body.message,
            idAppUser: req.body.idAppUser,
            idCompany: req.body.idCompany,
            idConversation: msj.idConversation
          },
            { transaction: t }
          );
      });
  });
}

router.post('/', (req, res) => {
  transactionChat(req).then(() => {
    res.json({
      success: true
    });
  }).catch((err) => {
    console.log(err);
    res.json({
      success: false,
      msg: 'Error en la transacción, intentelo nuevamente'
    });
  });
});

module.exports = router;
