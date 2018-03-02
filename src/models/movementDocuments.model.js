'use strict';
module.exports = function (sequelize, DataTypes) {
  const movementDocument = sequelize.define('movementDocuments', {
    idMovement: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    idDocumentMaster: {
      type: DataTypes.BIGINT,
      references: {
        model: 'documentMasters',
        key: 'idDocumentMaster'
      },
      allowNull: false
    },
    idDocument: {
      type: DataTypes.BIGINT,
      references: {
        model: 'documents',
        key: 'idDocument'
      },
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
          // FK ID DOCUMENT MASTER
          movementDocument.belongsTo(models.documentMasters, {
            foreignKey: 'idDocumentMaster'
          });

          models.documentMasters.hasMany(movementDocument, {
            foreignKey: 'idDocumentMaster'
          });

          // FK ID DOCUMENT 
          movementDocument.belongsTo(models.documents, {
            foreignKey: 'idDocument'
          });

          models.documents.hasMany(movementDocument, {
            foreignKey: 'idDocument'
          });
        }
      }
    });
  return movementDocument;
};
