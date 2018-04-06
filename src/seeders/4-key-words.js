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
        nameKeyWord: 'tostadas',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'bagette',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'pan frances',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'bonettes',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'bonetes',
        idCategory: 1,
        state: true
      },
      {
        nameKeyWord: 'almohabana',
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
        nameKeyWord: 'libreta',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'escuadra',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'colbon',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'marcadores',
        idCategory: 2,
        state: true
      },
      {
        nameKeyWord: 'escarcha',
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
        nameKeyWord: 'carne frita',
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
        nameKeyWord: 'chuleta',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'camarones',
        idCategory: 3,
        state: true
      },
      {
        nameKeyWord: 'grille',
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
        nameKeyWord: 'pizza',
        idCategory: 4,
        state: true
      },
      {
        nameKeyWord: 'tacos',
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
        nameKeyWord: 'destornillador',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'palendra',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'carretilla',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'tuberia pvc',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'tuberia',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'canaleta',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'bombillo',
        idCategory: 5,
        state: true
      },
      {
        nameKeyWord: 'arroz',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'azucar',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'sal',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'aceite',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'cafe',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'leche',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'huevos',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'salchichas',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'lentejas',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'frijol',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'gaseosa',
        idCategory: 6,
        state: true
      },
      {
        nameKeyWord: 'llantas',
        idCategory: 7,
        state: true
      },
      {
        nameKeyWord: 'motor',
        idCategory: 7,
        state: true
      },
      {
        nameKeyWord: 'frenos',
        idCategory: 7,
        state: true
      },
      {
        nameKeyWord: 'espejos',
        idCategory: 7,
        state: true
      },
      {
        nameKeyWord: 'radio',
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
