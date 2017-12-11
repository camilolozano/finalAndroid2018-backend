'use strict';

module.exports = function (sequelize, DataTypes) {
  const compound = sequelize.define('compounds', {
    idcompound: {
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
    idLocationType: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'locationTypes',
        key: 'idLocationType'
      }
    },
    locationDescription: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    locationFence: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    idfenceType: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fenceTypes',
        key: 'idfenceType'
      }
    },
    fenceSize: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    idAccessType: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'accessTypes',
        key: 'idAccessType'
      }
    },
    idBuildingType: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'buildingTypes',
        key: 'idBuildingType'
      }
    },
    buildingOwnerIfAvailable: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    genset: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    fuePropaneTankType: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    propaneFuelTankSize: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    'createdAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    'updatedAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
  }, {
      claseMethods: {
        associate: function (models) {
          compound.belongsTo(models.events, {
            foreignKey: 'idEvent'
          });

          models.events.hasMany(compound, {
            foreignKey: 'idEvent'
          });

          compound.belongsTo(models.locationTypes, {
            foreignKey: 'idLocationType'
          });

          models.locationTypes.hasMany(compound, {
            foreignKey: 'idLocationType'
          });

          compound.belongsTo(models.fenceTypes, {
            foreignKey: 'idfenceType'
          });

          models.fenceTypes.hasMany(compound, {
            foreignKey: 'idfenceType'
          });

          compound.belongsTo(models.accessTypes, {
            foreignKey: 'idAccessType'
          });

          models.accessTypes.hasMany(compound, {
            foreignKey: 'idAccessType'
          });

          compound.belongsTo(models.buildingTypes, {
            foreignKey: 'idBuildingType'
          });

          models.buildingTypes.hasMany(compound, {
            foreignKey: 'idBuildingType'
          });

        }
      }
    });
  return compound;
};
