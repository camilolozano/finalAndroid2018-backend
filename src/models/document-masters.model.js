'use strict';
module.exports = function (sequelize, DataTypes) {
  const documentMaster = sequelize.define('documentMasters', {
    idDocumentMaster: {
      type: DataTypes.BIGINT,
      references: {
        model: 'documents',
        key: 'idDocument'
      },
      primaryKey: true,
      allowNull: false
    },
    searchText: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    idAppUser: {
      type: DataTypes.BIGINT,
      references: {
        model: 'appUsers',
        key: 'idAppUser'
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
          // FK ID DOCUMENT
          documentMaster.belongsTo(models.documents, {
            foreignKey: 'idDocumentMaster'
          });

          models.documents.hasMany(documentMaster, {
            foreignKey: 'idDocumentMaster'
          });
          // FK ID APP USER
          documentMaster.belongsTo(models.appUsers, {
            foreignKey: 'idAppUser'
          });

          models.appUsers.hasMany(documentMaster, {
            foreignKey: 'idAppUser'
          });
        }
      }
    });
  return documentMaster;
};
