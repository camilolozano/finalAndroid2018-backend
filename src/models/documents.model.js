'use strict';
module.exports = function (sequelize, DataTypes) {
  const docum = sequelize.define('documents', {
    idDocument: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    idPrefix: {
      type: DataTypes.BIGINT,
      references: {
        model: 'prefixes',
        key: 'idPrefix'
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
          // FK ID PREFIX
          docum.belongsTo(models.prefixes, {
            foreignKey: 'idPrefix'
          });

          models.prefixes.hasMany(docum, {
            foreignKey: 'idPrefix'
          });
        }
      }
    });
  return docum;
};
