'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('queries', [{
      queryCode: 'SEL001',
      queryName: 'Busqueda de productos segun categorias',
      description: 'Busqueda de productos segun categorias',
      query: `
        SELECT DISTINCT ON (c."idCompany") c."nameBusiness", c."addressCompany", c."avatarCompany"
        FROM companies AS c
          JOIN "categoriesCompanies" AS ce
            ON c."idCompany" = ce."idCompany"
          JOIN "categories" AS cp
            ON cp."idCategory" = ce."idCategory"
        WHERE cp."idCategory" IN
              (SELECT ct."idCategory"
              FROM categories AS ct
                JOIN "keyWords" AS kw
                  ON ct."idCategory" = kw."idCategory"
              WHERE kw."nameKeyWord" IN
                    (SELECT foo."nameKeyWord"
                      FROM "keyWords" AS foo
                      WHERE "nameKeyWord" ILIKE '%:findWord%'))
      `
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
