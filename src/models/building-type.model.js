'use strict';
module.exports = function (sequelize, DataTypes) {
  const buildingType = sequelize.define('buildingTypes', {
    idBuildingType: {
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
  return buildingType;
};

