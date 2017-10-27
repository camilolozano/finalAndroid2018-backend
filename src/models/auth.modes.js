'use strict';

module.exports = function (sequelize, DataTypes) {
  const auth = sequelize.define('auths', {
    idAuth: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    idSystemUser: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'systemUsers',
        key: 'idSystemUser'
      }
    },
    sessionUuid: {
      type: DataTypes.TEXT,
      allowNull: true
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
  }, {
    classMethods: {
      associate: (models) => {
        auth.belongsTo(models.systemUsers, {
          foreignKey: 'idSystemUser'
        });
        models.systemUsers.hasMany(auth, {
          foreignKey: 'idSystemUser'
        });
      }
    }
  });
  return auth;
};
