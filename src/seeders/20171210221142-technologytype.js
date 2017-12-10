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
      name: 'GPRS EDGE/EGPRS',
    }, {
      name: 'CDMA2000 1X',
    }, {
      name: '4G',
    }, {
      name: 'CDMA2000 1xEV-DO',
    }, {
      name: 'LTE',
    }, {
      name: '3G',
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
