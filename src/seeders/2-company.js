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
      nameBusiness: 'Panaderia 20 de Julio',
      nitCompany: '111111111',
      addressCompany: 'Calle 15 No 27',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app2@big.com',
      avatarCompany: 'http://www.ccunicentropasto.com/wp-content/uploads/2016/07/logo-20-de-julio.jpg',
      state: true
    },
    {
      nameBusiness: 'Panaderia don Rosendo',
      nitCompany: '123456789',
      addressCompany: 'Carrera 24 Calle 18',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app3@big.com',
      avatarCompany: 'http://panaderiadonrosendo.com.co/wp-content/uploads/2016/12/logo-mediano-1.png',
      state: true
    },
    {
      nameBusiness: 'Caffeto',
      nitCompany: '123456789',
      addressCompany: 'Carrera 19 No. 21B',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app4@big.com',
      avatarCompany: 'http://www.turismotlaxcala.com/images/nivel_4/logo_caffetos.jpg',
      state: true
    },
    {
      nameBusiness: 'Pananderia Sulerna',
      nitCompany: '123456789',
      addressCompany: 'Las cuadras Cra 30',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app5@big.com',
      avatarCompany: 'http://media-cdn.tripadvisor.com/media/photo-o/0e/31/7a/2f/sulerna.jpg',
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
      avatarCompany: 'http://encolombia.com/wp-content/uploads/2012/12/panaderia7-1.jpg',
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
      avatarCompany: 'http://www.lacali.com.co/images/logo-4.png',
      state: true
    },
    {
      nameBusiness: 'Papaleria Ofiescolar',
      nitCompany: '123456789',
      addressCompany: 'Calle 16 - 15',
      contactCompany: '7202020',
      latitude: '1.211371',
      longitude: '-77.283014',
      emailCompany: 'big-app8@big.com',
      avatarCompany: 'http://www.amarillastb.com/sites/default/files/logos-clientes/2639-PAPELERIA-TAURO.jpg',
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
      avatarCompany: 'http://www.amarillastb.com/sites/default/files/logos-clientes/6586-GARABATOS-PAPELERIA.jpg',
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
      avatarCompany: 'http://papelesprimavera.com/wp-content/uploads/2017/12/distribuciones-el-dorado.png',
      state: true
    },
    {
      nameBusiness: 'Papeleria la 30',
      nitCompany: '123456789',
      addressCompany: 'Calle 30 No. 30 28',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app11@big.com',
      avatarCompany: 'http://container.amarillasinternet.com/pictures/200000_300000/200000_210000/207000_208000/207300_207400/207366/gallery/14600865240.jpg',
      state: true
    },
    {
      nameBusiness: 'Restaurante Mister Pollo',
      nitCompany: '123456789',
      addressCompany: 'Chapultepec Salida al Norte',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app12@big.com',
      avatarCompany: 'http://pbs.twimg.com/profile_images/1503506508/LOGO_MISTER_POLLO.JPG',
      state: true
    },
    {
      nameBusiness: 'Restaurante la Merced',
      nitCompany: '123456789',
      addressCompany: 'Calle No. 9 Esquina Unicentro',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app13@big.com',
      avatarCompany: 'http://container.amarillasinternet.com/pictures/100000_200000/140000_150000/140000_141000/140500_140600/140565/gallery/166706.jpg',
      state: true
    },
    {
      nameBusiness: 'Restaurante STEAK BBQ',
      nitCompany: '123456789',
      addressCompany: 'Calle 22 No. 40 50 Norte',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app14@big.com',
      avatarCompany: 'http://www.ccunicentropasto.com/wp-content/uploads/2016/07/logo-steak-bbq.jpg',
      state: true
    },
    {
      nameBusiness: 'Restaurante Angus',
      nitCompany: '123456789',
      addressCompany: 'Carrera 38 Calle 40',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app15@big.com',
      avatarCompany: 'http://www.tuordenexpress.com/wp-content/uploads/2014/09/Logo-Angus-1.jpg',
      state: true
    },
    {
      nameBusiness: 'Restaurante FIGO',
      nitCompany: '123456789',
      addressCompany: 'Calle 28 No. 30 45',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app16@big.com',
      avatarCompany: 'http://paginas-amarillas.online/wp-content/uploads/2017/02/img-pr-figo-pasta-pizza-pasto-tcel-848x315.jpg',
      state: true
    },
    {
      nameBusiness: 'Big-Dog',
      nitCompany: '123456789',
      addressCompany: 'Calle No. 30B 50',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app17@big.com',
      avatarCompany: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/b1/93/06/deliciosos-supernachos.jpg',
      state: true
    },
    {
      nameBusiness: 'El Corral',
      nitCompany: '123456789',
      addressCompany: 'C.C Unicentro 206',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app18@big.com',
      avatarCompany: 'http://www.ccunicentropasto.com/wp-content/uploads/2016/07/logo-el-corral.jpg',
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
      avatarCompany: '',
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
      avatarCompany: 'http://cheerspizzeria.com/wp-content/uploads/2015/02/logo2.png',
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
      avatarCompany: 'http://s3-media1.fl.yelpcdn.com/bphoto/9i1irkiAJF2VMoGhPrnP0g/ls.jpg',
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
      avatarCompany: 'http://casaandina.com.co/oficial/wp-content/uploads/2017/12/Casa-Andina-pasto-ferreteria-distribuidor-oficial-sika-impermeabilizacion-min.png',
      state: true
    },
    {
      nameBusiness: 'Ferreteria Buenos Aires',
      nitCompany: '123456789',
      addressCompany: 'Calle 11 No. 18 Fatima',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app23@big.com',
      avatarCompany: 'http://www.ferreteriabuenosaires.com/tiendavirtual/img/mi-tienda-logo-1486741357.jpg',
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
      avatarCompany: 'http://www.losandesonline.cl/img/articulo/ferreteria-andina1_(3).jpg',
      state: true
    },
    {
      nameBusiness: 'Ferreteria ChavezLeon',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app25@big.com',
      avatarCompany: 'http://container.amarillasinternet.com/pictures/100000_200000/190000_200000/194000_195000/194500_194600/194574/gallery/14847092502.jpg',
      state: true
    },
    {
      nameBusiness: 'Construrama',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app26@big.com',
      avatarCompany: 'http://cdn0.talenteca.com/company-images/TK_COMPANY_LOGO-2017_09_19_02_50_05-40080244371890241901.png',
      state: true
    },
    {
      nameBusiness: 'Supermercado Andino',
      nitCompany: '123456789',
      addressCompany: 'Calle 34 Panamericana',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app27@big.com',
      avatarCompany: 'http://lh3.googleusercontent.com/-0u9wZrpcDpg/Vsh8LWFPbeI/AAAAAAAAAH0/WpSgRXxcbp0/w424-h318-n/exterior3.jpg',
      state: true
    },
    {
      nameBusiness: 'Exito',
      nitCompany: '123456789',
      addressCompany: 'Calle 18 Esquina',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app28@big.com',
      avatarCompany: 'http://www.eluniversal.com.co/sites/default/files/magangue_4.jpg',
      state: true
    },
    {
      nameBusiness: 'Alkosto',
      nitCompany: '123456789',
      addressCompany: 'Parque Bolivar Calle 22',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app29@big.com',
      avatarCompany: 'http://cdn.picodi.com/co/files/shop-description/a/alkosto/alkosto-logo.png',
      state: true
    },
    {
      nameBusiness: 'El Tigre de la Rebaja',
      nitCompany: '123456789',
      addressCompany: 'Calle 18 San Juan Bosco',
      contactCompany: '7202020',
      latitude: '1.216641',
      longitude: '-77.288535',
      emailCompany: 'big-app30@big.com',
      avatarCompany: 'http://www.supermercadoeltigredelarebaja.com/img/0224/484.png',
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
      avatarCompany: '',
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
