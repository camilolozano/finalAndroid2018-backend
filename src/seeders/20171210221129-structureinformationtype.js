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
    return queryInterface.bulkInsert('sctructureInformationTypes', [{
      description: 'Monopole Tower',
    }, {
      description: 'Lattice Tower - 3 Leg SST',
    }, {
      description: 'Lattice Tower - 4 Leg SST',
    }, {
      description: 'Guyed Tower',
    }, {
      description: 'Stealth  Tower',
    }, {
      description: 'Broadcast Tower',
    }, {
      description: 'Roof Top',
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
