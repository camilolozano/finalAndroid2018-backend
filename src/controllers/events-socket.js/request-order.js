import {
  documents,
  documentRequests
} from '../../models';
const db = require('../../models/index').sequelize;

function transaction (data, io) {
  const { idAppUser, idCompany, search } = data;
  return db.transaction(t => {
    return documents.create({
      idAppUser: idAppUser,
      idCompany: idCompany,
      idPrefix: 1
    }, { transaction: t })
      .then((doc) => {
        return documentRequests.create({
          idDocument: doc.idDocument,
          searchText: search
        }, { transaction: t });
      });
  }).then((exe) => {
    return idCompany;
  });
}

exports.createOrderRequest = (data, io) => {
  return transaction(data, io);
};
