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
    return queryInterface.bulkInsert('locationTypes', [{
      description: 'Urban, suburban or wooden areas',
    }, {
      description: 'Flat or Rolling, open country and grasslands',
    }, {
      description: 'Flat or Rolling, unobstructed areas over open water',
    }, {
      description: 'Ridge, long narrow chain of hills or mountains',
    }, {
      description: 'Hill, top or within the upper half of a hill',
    }, {
      description: 'Escarpment, a steep slope or long cliff',
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
