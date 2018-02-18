'use strict';

module.exports = function (sequelize, DataTypes) {
  const appUser = sequelize.define(
    'appUsers',
    {
      // Personal Information
      idAppUser: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      firstNameUser: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      lastNameUser: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      addressUser: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      contactUser: {
        type: DataTypes.STRING(10),
        allowNull: false
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
      // Network Social
      socialNetworkUser: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      scoreUser: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      avatar: {
        type: DataTypes.STRING(200),
        defaultValue: 'https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png'
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
    }
  );
  return appUser;
};
