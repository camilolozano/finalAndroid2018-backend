'use strict';

module.exports = function (sequelize, DataTypes) {
  const event = sequelize.define('events', {
    idEvent: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    idSystemUser: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'systemUsers',
        key: 'idSystemUser'
      }
    },
    dateRegistreDB: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('NOW')
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
          event.belongsTo(models.systemUsers, {
            foreignKey: 'idSystemUser'
          });

          models.systemUsers.hasMany(event, {
            foreignKey: 'idSystemUser'
          });
        }
      }
    });
  return event;
};
