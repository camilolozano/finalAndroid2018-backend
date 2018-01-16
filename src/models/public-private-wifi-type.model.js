'use strict';
module.exports = function (sequelize, DataTypes) {
  const publicPrivateWifiType = sequelize.define('publicPrivateWifiType', {
    idPublicPrivateWifi: {
      type: DataTypes.BIGINT,
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
  return publicPrivateWifiType;
};

