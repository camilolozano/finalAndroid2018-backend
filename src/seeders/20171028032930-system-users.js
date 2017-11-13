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
    return queryInterface.bulkInsert('systemUsers', [{
      userCode: 'CODE-1',
      firstName: 'JHON',
      secondName: '',
      firstLastName: 'LENNON',
      secondLastName: '',
      emailUsername: 'jhon@americas.com',
      password: '$2a$08$c23.I3q4DQKQ4621hW7DzuuggtITuqm7uWWVCvmR0Vt63WM1LRs62',
      idUserType: 1,
      contactNumber: '',
      idCompany: 1,
      identificationCard: '123456789',
      identificationType: 'ID_NUMBER',
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
