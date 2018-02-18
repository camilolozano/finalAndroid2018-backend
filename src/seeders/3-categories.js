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

    return queryInterface.bulkInsert('categories', [
      {
        nameCategory: 'Panaderias',
        descriptionCategory: 'Venta de panaderia y pasteleria',
        state: true,
      },
      {
        nameCategory: 'Papelerias',
        descriptionCategory: 'Venta materiales de trabajo en escuelas y personal',
        state: true,  
      },
      {
        nameCategory: 'Restaurantes',
        descriptionCategory: 'Venta de alimentos y especialidades',
        state: true,  
      },
      {
        nameCategory: 'Comidas Rapidas',
        descriptionCategory: 'Venta y produccion de comidas rapidas',
        state: true,  
      },
      {
        nameCategory: 'Ferreterias',
        descriptionCategory: 'Suministro de elementos del hogar',
        state: true,  
      },
      {
        nameCategory: 'Tiendas',
        descriptionCategory: 'Articulos para remesa del hogar Pymes',
        state: true,  
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
