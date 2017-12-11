'use strict';
module.exports = function (sequelize, DataTypes) {
  const fenceType = sequelize.define('fenceTypes', {
    idfenceType: {
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
  return fenceType;
};

