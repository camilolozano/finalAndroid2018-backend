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

function transactionSolicitation (body, res, payload) {
  const { idAppUser, search } = body;
  console.log(body);
  return payload.map((d) => {
    return db
    .transaction(t => {
      return documents
        .create(
        {
          idPrefix: 1,
          state: true
        },
          { transaction: t }
        )
        .then(document => {
          return documentMasters
            .create(
            {
              idAppUser: +idAppUser,
              idDocumentMaster: +document.idDocument,
              searchText: search,
              idCompany: d.idCompany
            },
              { transaction: t }
            );
        });
    });
  });
}

router.post('/:id_user', async (req, res) => {
  const { word } = req.body;
  // const searches = search.split(' ');
  // const data = dataC(searches);
  const code = 'SEL001';
  // const data = [];
  // searches.map(v => {
  //   data.push(v);
  // });

  await getSql(code).then(sql => {
    // data.forEach(async element => {
    exeSql(sql.replace(`:findWord`, word)).then(payload => {
      if (payload.length) {
        const miPrimeraPromise = new Promise((resolve, reject) => {
          transactionSolicitation(req.body, res, payload);
          resolve;
        });
        miPrimeraPromise.then(() => {
          res.json({
            data: payload,
            success: true
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
