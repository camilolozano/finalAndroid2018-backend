'use strict';
module.exports = function (sequelize, DataTypes) {
  const category = sequelize.define('categories', {
    idCategory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nameCategory: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    descriptionCategory: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  });
  return category;
};