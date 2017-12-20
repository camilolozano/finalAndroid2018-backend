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
      queryName: 'GET My events',
      description: 'Get all my events register',
      query: `
            SELECT
              o.surveyor,
              o.date_create,
              o."directionToSite",
              o.temperature,
              o."watherConditions"
            FROM
              "events" e,
              "oSurveyInformations" o
            WHERE
              e."idEvent" = o."idEvent"
              AND e."idSystemUser" = :id_user
      `
    }, {
      queryCode: 'SEL002',
      queryName: 'GET All events',
      description: 'Get all events register',
      query: `
            SELECT
              o.surveyor,
              o.date_create,
              o."directionToSite",
              o.temperature,
              o."watherConditions"
            FROM
              "events" e,
              "oSurveyInformations" o
            WHERE
              e."idEvent" = o."idEvent"
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
