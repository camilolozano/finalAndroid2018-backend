'use strict';

module.exports = function (sequelize, DataTypes) {
  const SYSTEM_USER = sequelize.define('systemUsers', {
    ID_SYSTEM_USER: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    userCode: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: true
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
      defaultValue: true
    },
    'createdAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    'updatedAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  }, {
    classMethods: {
      associate: function (models) {
        // FK USER_TYPE
        SYSTEM_USER.belongsTo(models.userTypes, {
          foreignKey: 'idUserType'
        });

        models.userTypes.hasMany(SYSTEM_USER, {
          foreignKey: 'idUserType'
        });

        // FK COMPANY
        SYSTEM_USER.belongsTo(models.companies, {
          foreignKey: 'idCompany'
        });

        models.companies.hasMany(SYSTEM_USER, {
          foreignKey: 'idCompany'
        });
      }
    }
  });

  return SYSTEM_USER;
};
