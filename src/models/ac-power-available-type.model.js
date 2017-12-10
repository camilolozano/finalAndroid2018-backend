'use strict';
module.exports = function (sequelize, DataTypes) {
  const acPowerAvailableType = sequelize.define('acPowerAvailableTypes', {
    idAcPowerAvailable: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  });
  return acPowerAvailableType;
};

