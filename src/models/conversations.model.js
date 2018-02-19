'use strict';
module.exports = function (sequelize, DataTypes) {
  const conversation = sequelize.define('conversations', {
    idConversation: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
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
    idDocument: {
      type: DataTypes.BIGINT,
      references: {
        model: 'documents',
        key: 'idDocument'
      },
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
          // FK ID APP USER
          conversation.belongsTo(models.appUsers, {
            foreignKey: 'idAppUser'
          });

          models.appUsers.hasMany(conversation, {
            foreignKey: 'idAppUser'
          });

          // FK ID COMPANY
          conversation.belongsTo(models.companies, {
            foreignKey: 'idCompany'
          });

          models.companies.hasMany(conversation, {
            foreignKey: 'idCompany'
          });

          // FK ID DOCUMENT
          conversation.belongsTo(models.documents, {
            foreignKey: 'idDocument'
          });

          models.documents.hasMany(conversation, {
            foreignKey: 'idDocument'
          });
        }
      }
    });
  return conversation;
};
