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
        SELECT DISTINCT ON (c."idCompany") c."idCompany", c."nameBusiness", c."addressCompany", c."avatarCompany"
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
    },
    {
      queryCode: 'SEL002',
      queryName: 'Lista de ofertas a compañias',
      description: 'Lista de ofertas a compañias',
      query: `
        SELECT d."idCompany", c."nameBusiness", c."avatarCompany", dr."searchText"
        FROM documents AS d 
        JOIN companies AS c
        ON d."idCompany" = c."idCompany"
        JOIN "documentRequests" AS dr
        ON d."idDocument" = dr."idDocument"
        WHERE d."idAppUser" = :idUser AND d.state = TRUE
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
