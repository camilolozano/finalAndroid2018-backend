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
    forMessage: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    fromMessage: {
      type: DataTypes.BIGINT,
      allowNull: false
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
