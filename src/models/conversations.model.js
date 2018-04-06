'use strict';
module.exports = function (sequelize, DataTypes) {
  const conversation = sequelize.define('conversations', {
    idConversation: {
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
    room: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
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
