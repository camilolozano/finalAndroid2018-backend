'use strict';
module.exports = function (sequelize, DataTypes) {
  const serverConfigurations = sequelize.define('serverConfigurations', {
    idConfiguration: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nameVariable: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    'createdAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    'updatedAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  });
  return serverConfigurations;
};
