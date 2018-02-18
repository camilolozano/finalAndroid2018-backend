'use strict';
module.exports = function (sequelize, DataTypes) {
  const documentRequest = sequelize.define('documentRequests', {
    idDocumentRequest: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    idDocument: {
      type: DataTypes.BIGINT,
      references: {
        model: 'documents',
        key: 'idDocument'
      },
      allowNull: false
    },
    searchText: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    'createdAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    'updatedAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  },
    {
      classMethods: {
        associate: function (models) {
          // fk id document
          documentRequest.belongsTo(models.documents, {
            foreignKey: 'idDocument'
          });

          models.documents.hasMany(documentRequest, {
            foreignKey: 'idAppUser'
          });
        }
      }
    });
  return documentRequest;
};
