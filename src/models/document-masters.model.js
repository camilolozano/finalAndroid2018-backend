'use strict';
module.exports = function (sequelize, DataTypes) {
  const documentMaster = sequelize.define(
    'documentMasters',
    {
      idMaster: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      idDocumentMaster: {
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
      idAppUser: {
        type: DataTypes.BIGINT,
        references: {
          model: 'appUsers',
          key: 'idAppUser'
        },
        allowNull: false
      },
      idCompany: {
        type: DataTypes.BIGINT,
        references: {
          model: 'companies',
          key: 'idCompany'
        },
        allowNull: false
      },
      typeShop: {
        type: DataTypes.ENUM('Premium', 'Estandar', 'Economico'),
        allowNull: false
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
      },
      updatedAt: {
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

          // FK ID_COMPANY
          documentMaster.belongsTo(models.companies, {
            foreignKey: 'idCompany'
          });

          models.companies.hasMany(documentMaster, {
            foreignKey: 'idCompany'
          });
        }
      }
    }
  );
  return documentMaster;
};
