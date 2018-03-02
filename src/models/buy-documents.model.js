'use strict';
module.exports = function (sequelize, DataTypes) {
  const buyDocument = sequelize.define('buyDocuments', {
    idBuyDocument: {
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
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    answerText: {
      type: DataTypes.STRING(50),
      allowNull: false
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
          // FK ID DOCUMENT
          buyDocument.belongsTo(models.documents, {
            foreignKey: 'idDocument'
          });

          models.documents.hasMany(buyDocument, {
            foreignKey: 'idDocument'
          });
        }
      }
    });
  return buyDocument;
};
