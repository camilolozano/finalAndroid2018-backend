'use strict';

module.exports = function (sequelize, DataTypes) {
  const servicesAvailable = sequelize.define('servicesAvailables', {
    idServicesAvailable: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    idEvent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'events',
        key: 'idEvent'
      }
    },
    wifi: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    publicPrivateWifi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    fiber: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    water: {
      type: DataTypes.BOOLEAN,
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
  return servicesAvailable;
};
