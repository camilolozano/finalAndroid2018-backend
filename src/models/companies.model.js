'use strict';
module.exports = function (sequelize, DataTypes) {
  const company = sequelize.define('companies', {
    idCompany: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    // idNumber: {
    //   type: DataTypes.STRING(15),
    //   allowNull: false
    // },
    name1Company: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    name2Company: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    last1Company: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    last2Company: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    nameBusiness: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    nitCompany: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    contactCompany: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    addressCompany: {
      type: DataTypes.STRING(150),
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
    emailCompany: {
      type: DataTypes.STRING(150),
      unique: true,
      isEmail: true,
      allowNull: false
    },
    avatarCompany: {
      type: DataTypes.STRING(200),
      defaultValue: 'https://cdn2.iconfinder.com/data/icons/fast-food-8/128/Fast_Food-26-256.png'
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
  });
  return company;
};
