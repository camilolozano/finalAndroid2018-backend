'use strict';

module.exports = function (sequelize, DataTypes) {
  const picturesLogo = sequelize.define(
    'picturesLogos',
    {
      idpicturesLogo: {
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      uuid: {
        type: DataTypes.UUID,
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
          picturesLogo.belongsTo(models.events, {
            foreignKey: 'idEvent'
          });

          models.events.hasMany(picturesLogo, {
            foreignKey: 'idEvent'
          });
        }
      }
    }
  );
  return picturesLogo;
};
