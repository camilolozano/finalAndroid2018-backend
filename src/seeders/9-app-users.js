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
    return queryInterface.bulkInsert('appUsers', [{
        firstNameUser: 'Admin',
        lastNameUser: 'Admin2',
        addressUser: 'Big App',
        contactUser: '7216212',
        emailUsername: 'admin@admin.com',
        password: '$2a$08$c23.I3q4DQKQ4621hW7DzuuggtITuqm7uWWVCvmR0Vt63WM1LRs62',
        state: true
      },
      {
        firstNameUser: 'Prueba',
        lastNameUser: 'Prueba2',
        addressUser: 'Big App',
        contactUser: '7216212',
        emailUsername: 'prueba@prueba.com',
        password: '$2a$08$c23.I3q4DQKQ4621hW7DzuuggtITuqm7uWWVCvmR0Vt63WM1LRs62',
        state: true
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
