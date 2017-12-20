'use strict';

module.exports = function (sequelize, DataTypes) {
  const structureInformationGrid = sequelize.define(
    'structureInformationGrids',
    {
      idstructureInformationGrid: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      idstructureInformation: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'structureInformations',
          key: 'idstructureInformation'
        }
      },
      idAntenaType: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'antenaTypes',
          key: 'idAntenaType'
        }
      },
      height: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      legLocation: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      qty: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      azimuth: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      lines: {
        type: DataTypes.STRING(30),
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
          // UsuarioSistema
          structureInformationGrid.belongsTo(models.structureInformations, {
            foreignKey: 'idstructureInformation'
          });

          models.structureInformations.hasMany(structureInformationGrid, {
            foreignKey: 'idstructureInformation'
          });

          structureInformationGrid.belongsTo(models.antenaTypes, {
            foreignKey: 'idAntenaType'
          });

          models.antenaTypes.hasMany(structureInformationGrid, {
            foreignKey: 'idAntenaType'
          });
        }
      }
    }
  );
  return structureInformationGrid;
};
