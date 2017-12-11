'use strict';

module.exports = function (sequelize, DataTypes) {
  const oSurveyInformation = sequelize.define('oSurveyInformations', {
    idoSurveyInformation: {
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    watherConditions: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    temperature: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    directionToSite: {
      type: DataTypes.TEXT,
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
          oSurveyInformation.belongsTo(models.events, {
            foreignKey: 'idEvent'
          });

          models.events.hasMany(oSurveyInformation, {
            foreignKey: 'idEvent'
          });
        }
      }
    });
  return oSurveyInformation;
};
