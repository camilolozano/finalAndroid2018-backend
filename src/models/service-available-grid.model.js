'use strict';

module.exports = function (sequelize, DataTypes) {
  const serviceAvailableGrid = sequelize.define('serviceAvailableGrids', {
    idServiceAvailableGrid: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    idServicesAvailable: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'servicesAvailables',
        key: 'idServicesAvailable'
      }
    },
    idCellularServiceProvider: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cellularServiceProviderTypes',
        key: 'idCellularServiceProvider'
      }
    },
    idTechnologyType: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'technologyTypes',
        key: 'idTechnologyType'
      }
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
          //UsuarioSistema
          serviceAvailableGrid.belongsTo(models.servicesAvailables, {
            foreignKey: 'idServicesAvailable'
          });

          models.servicesAvailables.hasMany(serviceAvailableGrid, {
            foreignKey: 'idServicesAvailable'
          });

          serviceAvailableGrid.belongsTo(models.cellularServiceProviderTypes, {
            foreignKey: 'idCellularServiceProvider'
          });

          models.cellularServiceProviderTypes.hasMany(serviceAvailableGrid, {
            foreignKey: 'idCellularServiceProvider'
          });


          serviceAvailableGrid.belongsTo(models.technologyTypes, {
            foreignKey: 'idTechnologyType'
          });

          models.technologyTypes.hasMany(serviceAvailableGrid, {
            foreignKey: 'idTechnologyType'
          });
        }
      }
    });
  return serviceAvailableGrid;
};
