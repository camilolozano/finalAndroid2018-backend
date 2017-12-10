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
    return queryInterface.bulkInsert('cellularServiceProviderTypes', [{
      description: 'AT&T Mobility',
    }, {
      description: 'Breakaway Wireless',
    }, {
      description: 'Cellular One of East Arizona',
    }, {
      description: 'Choice Wireless',
    }, {
      description: 'ClearTalk Wireless',
    }, {
      description: 'Commnet Wireless',
    }, {
      description: 'Sprint Corporation',
    }, {
      description: 'T-Mobile US',
    }, {
      description: 'U.S. Cellular',
    }, {
      description: 'Verizon Wireless',
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
