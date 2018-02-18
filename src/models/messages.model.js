'use strict';
module.exports = function (sequelize, DataTypes) {
  const message = sequelize.define('messages', {
    idChat: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    Message: {
      type: DataTypes.STRING(200),
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
    DateMessage: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.NOW
    },
    HourMessage: {
      type: DataTypes.TIME,
      defaultValue: sequelize.NOW
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
        }
      }
    });
  return message;
};
