'use strict';
module.exports = function (sequelize, DataTypes) {
  const prefix = sequelize.define('prefixes', {
    idPrefix: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    codPrefix: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    descriptionPrefix: {
      type: DataTypes.STRING(25),
      allowNull: true
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
  return prefix;
};
