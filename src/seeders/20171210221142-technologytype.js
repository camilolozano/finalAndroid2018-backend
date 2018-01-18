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
    return queryInterface.bulkInsert('technologyTypes', [{
      description: 'GPRS EDGE/EGPRS',
    }, {
      description: 'CDMA2000 1X',
    }, {
      description: '4G',
    }, {
      description: 'CDMA2000 1xEV-DO',
    }, {
      description: 'LTE',
    }, {
      description: '3G',
    },
    {
      description: 'N/A'
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
