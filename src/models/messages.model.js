'use strict';
module.exports = function (sequelize, DataTypes) {
  const message = sequelize.define('messages', {
    idMessage: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    idAppUser: {
      type: DataTypes.BIGINT,
      references: {
        model: 'appUsers',
        key: 'idAppUser'
      },
      allowNull: true
    },
    idCompany: {
      type: DataTypes.BIGINT,
      references: {
        model: 'companies',
        key: 'idCompany'
      },
      allowNull: true
    },
    DateMessage: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.NOW
    },
    HourMessage: {
      type: DataTypes.TIME,
      defaultValue: sequelize.NOW
    },
    idConversation: {
      type: DataTypes.BIGINT,
      references: {
        model: 'conversations',
        key: 'idConversation'
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
          // FK ID APP USER
          message.belongsTo(models.appUsers, {
            foreignKey: 'idAppUser'
          });

          models.appUsers.hasMany(message, {
            foreignKey: 'idAppUser'
          });

          // FK ID COMPANY
          message.belongsTo(models.companies, {
            foreignKey: 'idCompany'
          });

          models.companies.hasMany(message, {
            foreignKey: 'idCompany'
          });

          // FK ID CONVERSATIONS
          message.belongsTo(models.conversations, {
            foreignKey: 'idConversation'
          });

          models.conversations.hasMany(message, {
            foreignKey: 'idConversation'
          });

        }
      }
    });
  return message;
};
