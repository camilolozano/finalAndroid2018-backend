import express from 'express';
import models from '../models/index';
import { queries, documents, movementDocuments, buyDocuments } from '../models';

const router = express.Router();
const db = models.sequelize;

function getSql (code) {
  return queries
    .find({
      where: {
        queryCode: code
      }
    })
    .then(data => {
      return data.query;
    });
}

// regresa los procesos que se le han enviado a la empresas
function exeSqlDO (sql, idUser) {
  return db
    .query(sql, {
      replacements: {
        id_emp: idUser
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

router.get('/:id_user&:id_emp', async (req, res) => {
  const code = 'SEL006';
  const sql = await getSql(code);
  exeSqlDO(sql, req.params.id_emp).then((data) => {
    res.json({
      success: true,
      data
    });
  }).catch((err) => {
    res.json({
      success: false,
      msg: 'Error en la consulta'
    });
  });
});

router.put('/cancel/:id_user&:id_emp', (req, res) => {
  const document = req.body.document;
  documents.findOne({
    where: {
      idDocument: document
    }
  }).then((doc) => {
    return doc.updateAttributes({
      state: false
    });
  }).then(() => {
    res.json({
      success: true,
      msg: 'Actualización exitosa'
    });
  }).catch(() => {
    res.json({
      success: false,
      msg: 'Error en la actualización'
    });
  });
});

// Creacion de aceptación a solicitud de producto
function transactionApplyProduct (document) {
  return db.transaction(t => {
    return documents
      .create(
      {
        idPrefix: 2,
        state: true
      },
        { transaction: t }
      )
      .then(doc => {
        return movementDocuments.create(
          {
            idMaster: document,
            idDocument: doc.idDocument
          },
          { transaction: t }
        ).then(() => {
          return buyDocuments.create(
            {
              idDocument: document,
              state: true,
              answerText: 'xxxx'
            },
            { transaction: t });
        });
      });
  });
}

function exeSqlNt (sql, idDocument, idAppUser) {
  return db
    .query(sql, {
      replacements: {
        id_doc: idDocument,
        id_app_user: idAppUser
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

router.post('/apply/:id_user&:id_emp', (req, res) => {
  const documento = req.body.document;
  const idclient = req.body.idclient;
  transactionApplyProduct(documento).then(() => {
    getSql('SEL007').then((sql, appUser) => {
      exeSqlNt(sql, documento, idclient).then((accept) => {
        if (accept[0].count >= 3) {
          req.app.io.emit('to-accept', true);
          res.json({
            success: true,
            msg: 'Respuesta enviada exitosamente'
          });
        } else {
          res.json({
            success: true,
            msg: 'Respuesta enviada exitosamente'
          });
        }
      });
    });
  }).catch(() => {
    res.json({
      success: false,
      msg: 'La respuesta no fue enviada'
    });
  });
});

module.exports = router;
