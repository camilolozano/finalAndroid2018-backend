import {
  queries, documents, documentMasters
} from '../../models';
const db = require('../../models/index').sequelize;

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

function transactionSolicitation (body, payload) {
  const { idAppUser, search } = body;
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

exports.createSearchCompanies = async (data) => {
  const { word } = data;
  console.log(data);
  const code = 'SEL001';
  await getSql(code).then(sql => {
    // data.forEach(async element => {
    exeSql(sql.replace(`:findWord`, word)).then(payload => {
      if (payload.length) {
        console.log('camilo--------------------', payload);
        const miPrimeraPromise = new Promise((resolve, reject) => {
          transactionSolicitation(data, payload);
          resolve;
        });
        miPrimeraPromise.then(() => {
          console.log('ok');
          // res.json({
          //   data: payload,
          //   success: true
          // });
        });
      } else {
        // res.json({
        //   success: false
        // });
      }
    });
  });
};
