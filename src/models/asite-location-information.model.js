'use strict';

module.exports = function (sequelize, DataTypes) {
  const aSiteLocationInformation = sequelize.define(
    'aSiteLocationInformations',
    {
      idaSiteLocationInformation: {
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
      name: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      owner: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      county: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      zip: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      idLocationType: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'locationTypes',
          key: 'idLocationType'
        }
      },
      loam: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      clay: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      granite: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      sendAndGravel: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      limestone: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      slate: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      shale: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      sandstone: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      other: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      accessRoad: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      typeAccessRoad: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      required4x4: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      idAcPowerAvailable: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'acPowerAvailableTypes',
          key: 'idAcPowerAvailable'
        }
      },
      solarPower: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      sizeSolarPower: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      pointOfContact: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      latitude: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      longitude: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      groundElevation: {
        type: DataTypes.STRING(15),
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
    },
    {
      claseMethods: {
        associate: function (models) {
          aSiteLocationInformation.belongsTo(models.events, {
            foreignKey: 'idEvent'
          });

          models.events.hasMany(aSiteLocationInformation, {
            foreignKey: 'idEvent'
          });

          aSiteLocationInformation.belongsTo(models.locationTypes, {
            foreignKey: 'idLocationType'
          });

          models.locationTypes.hasMany(aSiteLocationInformation, {
            foreignKey: 'idLocationType'
          });

          aSiteLocationInformation.belongsTo(models.acPowerAvailableTypes, {
            foreignKey: 'idAcPowerAvailable'
          });

          models.acPowerAvailableTypes.hasMany(aSiteLocationInformation, {
            foreignKey: 'idAcPowerAvailable'
          });
        }
      }
    }
  );
  return aSiteLocationInformation;
};
