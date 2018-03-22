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
        FROM "keyWords" as foo
        WHERE foo."nameKeyWord" ILIKE '%' || (SELECT TRIM(BOTH 'aes' FROM ':findWord')) || '%'))
      `
    },
    {
      queryCode: 'SEL002',
      queryName: 'Lista de ofertas a compañias',
      description: 'Lista de ofertas a compañias',
      query: `
        SELECT d."idCompany", c."nameBusiness", c."avatarCompany", dr."searchText", d.state
        FROM documents AS d
        JOIN companies AS c
        ON d."idCompany" = c."idCompany"
        JOIN "documentRequests" AS dr
        ON d."idDocument" = dr."idDocument"
        WHERE d."idAppUser" = :idUser
      `
    },
    {
      queryCode: 'SEL003',
      queryName: 'Contar pedidos por empresa',
      description: 'Contar pedidos por empresa',
      query: `
        SELECT COUNT(d."idDocument")
        FROM documents AS d
        WHERE d."idCompany" = :idComp
      `
    },
    {
      queryCode: 'SEL004',
      queryName: 'Contar pedidos por usuario',
      description: 'Contar pedidos por usuario',
      query: `
        SELECT COUNT(d."idDocument")
        FROM documents AS d
        JOIN "documentMasters" AS dm
        ON dm."idDocumentMaster" = d."idDocument"
        WHERE dm."idAppUser" = :idUser AND d.state = TRUE
      `
    },
    {
      queryCode: 'SEL005',
      queryName: 'Seleccionar empresa por solicitud compra',
      description: 'Seleccionar empresa por solicitud compra',
      query: `
        SELECT DISTINCT ON (c."idCompany") dm."idAppUser", dm."searchText", c."nameBusiness", c."avatarCompany"
        FROM companies AS c
        JOIN "documentMasters" AS dm
        ON c."idCompany" = dm."idCompany"
        JOIN documents AS d
        ON dm."idDocumentMaster" = d."idDocument"
        WHERE dm."idCompany" = :id_emp AND d."idPrefix" = 1
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
