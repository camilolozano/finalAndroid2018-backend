'use strict';

module.exports = function (sequelize, DataTypes) {
  const systemUser = sequelize.define(
    'systemUsers',
    {
      idSystemUser: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      userCode: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      firstName: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      secondName: {
        type: DataTypes.STRING(25)
      },
      firstLastName: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      secondLastName: {
        type: DataTypes.STRING(25)
      },
      emailUsername: {
        type: DataTypes.STRING(150),
        unique: true,
        isEmail: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(70),
        allowNull: false
      },
      idUserType: {
        type: DataTypes.BIGINT,
        references: {
          model: 'userTypes',
          key: 'idUserType'
        },
        allowNull: false
      },
      contactNumber: {
        type: DataTypes.STRING(10)
      },
      idCompany: {
        type: DataTypes.BIGINT,
        references: {
          model: 'companies',
          key: 'idCompany'
        },
        allowNull: false
      },
      // personal identification card
      identificationCard: {
        type: DataTypes.STRING(15),
        unique: true,
        allowNull: false
      },
      identificationType: {
        type: DataTypes.ENUM('ID_NUMBER', 'PASSPORT'),
        allowNull: false
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
      classMethods: {
        associate: function (models) {
          // FK USER_TYPE
          systemUser.belongsTo(models.userTypes, {
            foreignKey: 'idUserType'
          });

          models.userTypes.hasMany(systemUser, {
            foreignKey: 'idUserType'
          });

          // FK COMPANY
          systemUser.belongsTo(models.companies, {
            foreignKey: 'idCompany'
          });

          models.companies.hasMany(systemUser, {
            foreignKey: 'idCompany'
          });
        }
      }
    }
  );

  return systemUser;
};
