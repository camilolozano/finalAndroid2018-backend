import express from 'express';
import models from '../models/index';
import { messages, conversations, queries } from '../models';

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
            idCompany: req.body.idCompany,
            idConversation: msj.idConversation
          },
            { transaction: t }
          );
      });
  });
}

router.post('/:id_user', (req, res) => {
  transactionChat(req).then(() => {
    req.app.io.emit('send-msg-app', true);
    res.json({
      success: true
    });
  }).catch((err) => {
    res.json({
      success: false,
      msg: 'Error en la transacción, intentelo nuevamente'
    });
  });
});

// chat
function getSql (code) {
  return queries
    .find({
      where: {
        queryCode: code
      }
    })
    .then(data => {
      return data.query;
    })
    .catch((err) => {
      return err;
    });
}

function exeSql (sql, doc) {
  return db
    .query(sql, {
      replacements: {
        id_doc: doc
      },
      type: db.QueryTypes.SELECT
    })
    .then(t => {
      return t;
    })
    .catch(err => {
      return err;
    });
}

router.get('/talk/:id_user&:id_doc', (req, res) => {
  const code = 'SEL009';
  getSql(code).then((sql) => {
    exeSql(sql, req.params.id_doc).then((data) => {
      res.json({
        data
      });
    });
  });
});

module.exports = router;
