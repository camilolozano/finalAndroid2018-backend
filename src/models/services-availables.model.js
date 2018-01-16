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
      defaultValue: false,
      allowNull: false
    },
    // publicPrivateWifi: {
    //   type: DataTypes.STRING(100),
    //   allowNull: false
    // },
    idPublicPrivateWifi: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'publicPrivateWifiType',
        key: 'idPublicPrivateWifi'
      }
    },
    phone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    fiber: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    cable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    water: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    microwave: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    satellite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
  }, {
    claseMethods: {
      associate: function (models) {
        servicesAvailable.belongsTo(models.events, {
          foreignKey: 'idEvent'
        });

        models.events.hasMany(servicesAvailable, {
          foreignKey: 'idEvent'
        });

        servicesAvailable.belongsTo(models.publicPrivateWifiType, {
          foreignKey: 'idPublicPrivateWifi'
        });

        models.publicPrivateWifiType.hasMany(servicesAvailable, {
          foreignKey: 'idPublicPrivateWifi'
        });
      }
    }
  });
  return servicesAvailable;
};
