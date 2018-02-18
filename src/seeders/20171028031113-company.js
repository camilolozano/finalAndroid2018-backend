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
    return queryInterface.bulkInsert('companies', [{
      nameBusiness: 'bigApp-Full-admin',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '',
      longitude: '',
      emailCompany: 'big-app@big.com',
      state: true
    },
    {
      nameBusiness: 'Panaderia La Espiga',
      nitCompany: '111111111',
      addressCompany: 'Calle 15 No 27',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app2@big.com',
      state: true
    },
    {
      nameBusiness: 'Panaderia la 24',
      nitCompany: '123456789',
      addressCompany: 'Carrera 24 Calle 18',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app3@big.com',
      state: true
    },
    {
      nameBusiness: 'Panaderia San Juan',
      nitCompany: '123456789',
      addressCompany: 'Carrera 19 No. 21B',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app4@big.com',
      state: true
    },
    {
      nameBusiness: 'Pananderia Valladolid',
      nitCompany: '123456789',
      addressCompany: 'Las cuadras Cra 30',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app5@big.com',
      state: true
    },
    {
      nameBusiness: 'Panaderia RikiPan',
      nitCompany: '123456789',
      addressCompany: 'Calle 21 B No 30',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app6@big.com',
      state: true
    },
    {
      nameBusiness: 'Papeleria la Cali',
      nitCompany: '123456789',
      addressCompany: 'Calle 22 No. 17 - 46',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app7@big.com',
      state: true
    },
    {
      nameBusiness: 'Papaleria OfiEscolar',
      nitCompany: '123456789',
      addressCompany: 'Calle 16 - 15',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app8@big.com',
      state: true
    },
    {
      nameBusiness: 'Papeleria Rodel',
      nitCompany: '123456789',
      addressCompany: 'Calle 30 No. 3A 25',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app9@big.com',
      state: true
    },
    {
      nameBusiness: 'Panaderia el Dorado',
      nitCompany: '123456789',
      addressCompany: 'Carrera 20 No. 17A',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app10@big.com',
      state: true
    },
    {
      nameBusiness: 'Papeleria la 30',
      nitCompany: '123456789',
      addressCompany: 'Calle Falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app11@big.com',
      state: true
    },
    {
      nameBusiness: 'Restaurante Mister Pollo',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app12@big.com',
      state: true
    },
    {
      nameBusiness: 'Restaurante la Merced',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app13@big.com',
      state: true
    },
    {
      nameBusiness: 'Restaurante Carnes',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app14@big.com',
      state: true
    },
    {
      nameBusiness: 'Restaurante la Tabla',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app15@big.com',
      state: true
    },
    {
      nameBusiness: 'Restaurante Parrila Colombiana',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app16@big.com',
      state: true
    },
    {
      nameBusiness: 'Big-Dog',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app17@big.com',
      state: true
    },
    {
      nameBusiness: 'StarWars',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app18@big.com',
      state: true
    },
    {
      nameBusiness: 'ComicFood',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app19@big.com',
      state: true
    },
    {
      nameBusiness: 'Cheers',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app20@big.com',
      state: true
    },
    {
      nameBusiness: 'SandwichTime',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app21@big.com',
      state: true
    },
    {
      nameBusiness: 'Ferreteria Casa Andina',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app22@big.com',
      state: true
    },
    {
      nameBusiness: 'Ferreteria Buenos Aires',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app23@big.com',
      state: true
    },
    {
      nameBusiness: 'Ferreteria Andina',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app24@big.com',
      state: true
    },
    {
      nameBusiness: 'Ferreteria la 13',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app25@big.com',
      state: true
    },
    {
      nameBusiness: 'Ferreteria JALBERTO',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app26@big.com',
      state: true
    },
    {
      nameBusiness: 'Supermercado Andino',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app27@big.com',
      state: true
    },
    {
      nameBusiness: 'Exito',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app28@big.com',
      state: true
    },
    {
      nameBusiness: 'Alkosto',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app29@big.com',
      state: true
    },
    {
      nameBusiness: 'El Tigre de la Rebaja',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app30@big.com',
      state: true
    },
    {
      nameBusiness: 'Metropolis 21',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app31@big.com',
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
