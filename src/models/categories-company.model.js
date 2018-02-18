'use strict';

module.exports = function (sequelize, DataTypes) {
  const categoryCompany = sequelize.define(
    'categoriesCompanies',
    {
      // personal identification card
      idCategoryCompany: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      idCompany: {
        type: DataTypes.BIGINT,
        references: {
          model: 'companies',
          key: 'idCompany'
        },
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
          // FK ID_COMPANY
          categoryCompany.belongsTo(models.companies, {
            foreignKey: 'idCompany'
          });

          models.companies.hasMany(categoryCompany, {
            foreignKey: 'idCompany'
          });

          // FK ID_CATEGORY
          categoryCompany.belongsTo(models.categories, {
            foreignKey: 'idSubCategory'
          });

          models.categories.hasMany(categoryCompany, {
            foreignKey: 'idSubCategory'
          });
        }
      }
    }
  );
  return categoryCompany;
};
