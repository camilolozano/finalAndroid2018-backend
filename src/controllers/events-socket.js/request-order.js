import {
  documents,
  documentRequests
} from '../../models';
const db = require('../../models/index').sequelize;

function transaction (data) {
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
  }).then(() => {
    const body = {
      success: true,
      meg: 'Creado exitosamente'
    };
    // io.sockets.emit('notification-order', body);
  }).catch((err) => {
    console.log('--------------err');
    console.log(err);
  });
}

exports.createOrderRequest = (data) => {
  transaction(data);
};
