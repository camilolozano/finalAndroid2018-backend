import express from 'express';
import models from '../../models/index';
import { queries, documents, documentMasters } from '../../models';

const db = models.sequelize;
const router = express.Router();

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

function exeSql (sql) {
  return db
    .query(sql, {
      type: db.QueryTypes.SELECT
    })
    .then(t => {
      return t;
    })
    .catch(err => {
      return err;
    });
}

function transactionSolicitation (body, payload, typeSearch) {
  const { idAppUser, search } = body;

  return db.transaction(t => {
    return documents
      .create(
      {
        idPrefix: 1,
        state: true
      },
        { transaction: t }
      )
      .then(document => {
        const data = payload.map(d => {
          return documentMasters.create(
            {
              idAppUser: +idAppUser,
              idDocumentMaster: +document.idDocument,
              searchText: search,
              idCompany: d.idCompany,
              typeShop: typeSearch
            },
            { transaction: t }
          );
        });
        return Promise.all(data);
      });
  });
}

router.post('/:id_user', (req, res) => {
  const { word, type_search } = req.body;
  // const searches = search.split(' ');
  // const data = dataC(searches);
  const code = 'SEL001';
  // const data = [];
  // searches.map(v => {
  //   data.push(v);
  // });
  getSql(code).then(sql => {
    exeSql(sql.replace(`:findWord`, word)).then(payload => {
      if (payload.length) {
        transactionSolicitation(req.body, payload, type_search)
          .then(da => {
            res.json({
              data: payload,
              success: true
            });
          })
          .then(() => {
            const data = {
              payload,
              search: req.body
            };
            req.app.io.emit('new-request', data);
          })
          .catch((err) => {
            res.json({
              msg: 'Error en la busqueda',
              success: false
            });
          });
      } else {
        res.json({
          success: false
        });
      }
    });
  });
});

module.exports = router;
