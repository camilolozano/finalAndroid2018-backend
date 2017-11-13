'use strict';
module.exports = function (sequelize, DataTypes) {
  const company = sequelize.define('companies', {
    idCompany: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    idNumber: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING(150)
    },
    'createdAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    'updatedAt': {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  });
  return company;
};
