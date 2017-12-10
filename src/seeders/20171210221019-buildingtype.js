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
    return queryInterface.bulkInsert('buildingTypes', [{
      description: 'None',
    }, {
      description: 'Enclosures',
    }, {
      description: 'Modular Concrete',
    }, {
      description: 'Modular Fiberglass',
    }, {
      description: 'Steel Envolock',
    }, {
      description: 'Cabinets',
    }, {
      description: 'Wood Construction',
    }, {
      description: 'Brick Construction',
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
