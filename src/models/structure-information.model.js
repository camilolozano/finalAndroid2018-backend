'use strict';

module.exports = function (sequelize, DataTypes) {
  const structureInformation = sequelize.define(
    'structureInformations',
    {
      idstructureInformation: {
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
      asr_number: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      faa: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      fcc_call_sign: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      owner: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      manufacturer: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      drawingNumber: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      designNumber: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      yearBuild: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      idStructureInformationType: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'structureInformationTypes',
          key: 'idStructureInformationType'
        }
      },
      height: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      idLegType: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'legTypes',
          key: 'idLegType'
        }
      },
      sections: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      idGeneralConditionType: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'generalConditionTypes',
          key: 'idGeneralConditionType'
        }
      },
      towerSize: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      topOfTaper: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      legSize: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      caissonHeight: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      latitude: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      longitude: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      groundElevation: {
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
          structureInformation.belongsTo(models.events, {
            foreignKey: 'idEvent'
          });

          models.events.hasMany(structureInformation, {
            foreignKey: 'idEvent'
          });

          structureInformation.belongsTo(models.structureInformationType, {
            foreignKey: 'idStructureInformationType'
          });

          models.structureInformationType.hasMany(structureInformation, {
            foreignKey: 'idStructureInformationType'
          });

          structureInformation.belongsTo(models.legTypes, {
            foreignKey: 'idLegType'
          });

          models.legTypes.hasMany(structureInformation, {
            foreignKey: 'idLegType'
          });

          structureInformation.belongsTo(models.generalConditionTypes, {
            foreignKey: 'idGeneralConditionType'
          });

          models.generalConditionTypes.hasMany(structureInformation, {
            foreignKey: 'idGeneralConditionType'
          });
        }
      }
    }
  );
  return structureInformation;
};
