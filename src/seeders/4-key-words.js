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

      return queryInterface.bulkInsert('keyWords', [{
        nameKeyWord: 'pan',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'galleta',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'pastel',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'torta',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'ponque',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'palanqueta',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'pan dulce',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'pan sal',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'tostadas',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'regla',
        idCategory: 2,
        state: true
      },
      ,
      {
        nameKeyWord: 'tijeras',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'resma',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'cuaderno',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'lapiz',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'borrador',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'cinta',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'lapicero',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'colores',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'cartulina',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'pollo',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'pollo asado',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'carne',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'carne asada',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'pescado',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'cerdo',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'asado',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'almuerzo',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'desayuno',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'cena',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'costilla',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'churrazo',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'lomo',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'hamburguesas',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'perro caliente',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'papas',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'salchipapas',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'sandwich',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'alitas',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'chorizo',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'arepas',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'pinchos',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'tornillos',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'martillo',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'cegueta',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'serrucho',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'clavos',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'taladro',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'pintura',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'arroz',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'azucar',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'sal',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'aceite',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'cafe',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'leche',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'huevos',
        idCategory: 5,
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
