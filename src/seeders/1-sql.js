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
    return queryInterface.bulkInsert(
      'queries',
      [
        {
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
        SELECT
          COUNT(doc."idDocument")
        FROM
          documents AS doc,
          "documentMasters" AS dm
        WHERE
          doc."idDocument" = dm."idDocumentMaster"
          AND dm."idCompany" = :idComp
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
        },
        {
          queryCode: 'SEL006',
          queryName: 'Información de los pedidos',
          description: 'Información de los pedidos realizado a una empresa',
          query: `
        SELECT
          dm."idMaster" AS Master,
          doc."idDocument" AS document,
          doc.state AS stateDocument,
          us."idAppUser" AS idClient,
          CONCAT(us."firstNameUser",' ', us."lastNameUser") AS nameClient,
          dm."searchText"
        FROM
          documents AS doc,
          "documentMasters" AS dm,
          "appUsers" AS us
        WHERE
          doc."idDocument" = dm."idDocumentMaster"
          AND us."idAppUser" = dm."idAppUser"
          AND dm."idCompany" = :id_emp
          AND doc.state is true
      `
        },
        {
          queryCode: 'SEL007',
          queryName: 'Conteo de empresas que aceptaron',
          description: 'Conteo de empresas que aceptaron',
          query: `
          SELECT
          COUNT(1)
        FROM
          documents AS doc,
          "documentMasters" AS dm
        WHERE
          doc."idDocument" = dm."idDocumentMaster"
          AND doc."idDocument" = :id_doc
          AND dm."idAppUser" = :id_app_user
      `
        },
        {
          queryCode: 'SEL008',
          queryName: 'Listado de empresas que aceptaron',
          description: 'Listado de empresas que aceptaron producto',
          query: `
          SELECT
            DISTINCT ON (doc."idDocument", dm."idCompany")
            doc."idDocument",
            dm."idCompany",
            COALESCE(comp."nameBusiness", CONCAT(comp."name1Company", ' ', comp."last2Company")) AS nameBusiness,
            dm."searchText",
            bud."answerText",
            dm."typeShop",
            comp."avatarCompany",
            comp.latitude,
            comp.longitude
          FROM
            documents AS doc,
            "documentMasters" AS dm,
            companies AS comp,
            "buyDocuments" AS bud,
            "movementDocuments" AS mv
          WHERE
            doc."idDocument" = dm."idDocumentMaster"
            AND bud."idDocument" = doc."idDocument"
            AND dm."idMaster" = mv."idMaster"
            AND dm."idCompany" = comp."idCompany"
            AND dm."idAppUser" = :idUser
          `
        },
        {
          queryCode: 'SEL009',
          queryName: 'Chat',
          description: 'Chat',
          query: `
          SELECT
            CASE
              WHEN ms."idAppUser" IS NULL
              THEN 'empresa'
              ELSE 'usuario'
            END AS flag,
            coalesce(us."firstNameUser", cp."nameBusiness") as QUIEN,
            ms.message,
            ms."createdAt"
            FROM
            documents AS doc
            LEFT JOIN conversations AS ch
            ON ch."idDocument" = doc."idDocument"
            LEFT JOIN messages AS ms
            ON ms."idConversation" = ch."idConversation"
            LEFT JOIN companies AS cp
            ON ms."idCompany" = cp."idCompany"
            LEFT JOIN "appUsers" AS us
            ON ms."idAppUser" = us."idAppUser"
          WHERE ch."idDocument" = :id_doc
          ORDER BY  ms."idMessage"`
        }
      ],
      {}
    );
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
