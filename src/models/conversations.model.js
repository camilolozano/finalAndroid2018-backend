'use strict';
module.exports = function (sequelize, DataTypes) {
  const conversation = sequelize.define('conversations', {
    idConversation: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    idMaster: {
      type: DataTypes.BIGINT,
      references: {
        model: 'documentMasters',
        key: 'idMaster'
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
          // FK ID DOCUMENT
          conversation.belongsTo(models.documentMasters, {
            foreignKey: 'idMaster'
          });

          models.documentMasters.hasMany(conversation, {
            foreignKey: 'idMaster'
          });
        }
      }
    });
  return conversation;
};
