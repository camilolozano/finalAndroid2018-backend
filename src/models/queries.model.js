'use strict';
module.exports = function (sequelize, DataTypes) {
  const query = sequelize.define('queries', {
    idQuery: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    queryCode: {
      type: DataTypes.STRING(7),
      allowNull: false,
      unique: true
    },
    queryName: {
      type: DataTypes.STRING(70),     
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: false
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
  return query;
};
