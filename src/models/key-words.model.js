'use strict';

module.exports = function (sequelize, DataTypes) {
  const keyWord = sequelize.define(
    'keyWords',
    {
      // personal identification card
      idKeyWord: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nameKeyWord: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      idCategory: {
        type: DataTypes.BIGINT,
        references: {
          model: 'categories',
          key: 'idCategory'
        },
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
    },
    {
      classMethods: {
        associate: function (models) {
          // FK ID_CATEGORY
          keyWord.belongsTo(models.categories, {
            foreignKey: 'idCategory'
          });

          models.categories.hasMany(keyWord, {
            foreignKey: 'idCategory'
          });
        }
      }
    }
  );
  return keyWord;
};
