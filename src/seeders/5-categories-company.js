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

      return queryInterface.bulkInsert('categoriesCompanies', [{
        idCompany: 2,
        idCategory: 1,
        state: true
      },
      {
        idCompany: 3,
        idCategory: 1,
        state: true
      },
      {
        idCompany: 4,
        idCategory: 1,
        state: true
      },
      {
        idCompany: 5,
        idCategory: 1,
        state: true
      },
      {
        idCompany: 6,
        idCategory: 1,
        state: true
      },
      {
        idCompany: 7,
        idCategory: 2,
        state: true
      },
      {
        idCompany: 8,
        idCategory: 2,
        state: true
      },
      {
        idCompany: 9,
        idCategory: 2,
        state: true
      },
      {
        idCompany: 10,
        idCategory: 2,
        state: true
      },
      {
        idCompany: 11,
        idCategory: 2,
        state: true
      },
      {
        idCompany: 12,
        idCategory: 3,
        state: true
      },
      {
        idCompany: 12,
        idCategory: 4,
        state: true
      },
      {
        idCompany: 13,
        idCategory: 3,
        state: true
      },
      {
        idCompany: 13,
        idCategory: 3,
        state: true
      },
      {
        idCompany: 13,
        idCategory: 1,
        state: true
      },
      {
        idCompany: 14,
        idCategory: 3,
        state: true
      },
      {
        idCompany: 14,
        idCategory: 4,
        state: true
      },
      {
        idCompany: 15,
        idCategory: 3,
        state: true
      },
      {
        idCompany: 15,
        idCategory: 4,
        state: true
      },
      {
        idCompany: 16,
        idCategory: 3,
        state: true
      },
      {
        idCompany: 17,
        idCategory: 4,
        state: true
      },
      {
        idCompany: 18,
        idCategory: 4,
        state: true
      },
      {
        idCompany: 19,
        idCategory: 4,
        state: true
      },
      {
        idCompany: 20,
        idCategory: 4,
        state: true
      },
      {
        idCompany: 21,
        idCategory: 4,
        state: true
      },
      {
        idCompany: 22,
        idCategory: 5,
        state: true
      },
      {
        idCompany: 23,
        idCategory: 5,
        state: true
      },
      {
        idCompany: 24,
        idCategory: 5,
        state: true
      },
      {
        idCompany: 25,
        idCategory: 5,
        state: true
      },
      {
        idCompany: 26,
        idCategory: 5,
        state: true
      },
      {
        idCompany: 27,
        idCategory: 6,
        state: true
      },
      {
        idCompany: 28,
        idCategory: 6,
        state: true
      },
      {
        idCompany: 29,
        idCategory: 6,
        state: true
      },
      {
        idCompany: 30,
        idCategory: 6,
        state: true
      },
      {
        idCompany: 31,
        idCategory: 6,
        state: true
      },
      {
        idCompany: 32,
        idCategory: 7,
        state: true
      },
      {
        idCompany: 33,
        idCategory: 7,
        state: true
      },
      {
        idCompany: 34,
        idCategory: 7,
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
