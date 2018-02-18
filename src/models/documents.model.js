'use strict';
module.exports = function (sequelize, DataTypes) {
  const docum = sequelize.define('documents', {
    idDocument: {
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
          // fk id app user
          docum.belongsTo(models.appUsers, {
            foreignKey: 'idAppUser'
          });

          models.appUsers.hasMany(docum, {
            foreignKey: 'idAppUser'
          });

          // fk id prefix
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
