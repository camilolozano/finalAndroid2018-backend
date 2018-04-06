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
      latitude: '1.2114421',
      longitude: '-77.2805115',
      emailCompany: 'big-app2@big.com',
      avatarCompany: 'http://www.ccunicentropasto.com/wp-content/uploads/2016/07/logo-20-de-julio.jpg',
      state: true
    },
    {
      nameBusiness: 'Panaderia don Rosendo',
      nitCompany: '123456789',
      addressCompany: 'Carrera 24 Calle 18',
      contactCompany: '7202020',
      latitude: '1.2114167',
      longitude: '-77.2816541',
      emailCompany: 'big-app3@big.com',
      avatarCompany: 'http://panaderiadonrosendo.com.co/wp-content/uploads/2016/12/logo-mediano-1.png',
      state: true
    },
    {
      nameBusiness: 'Caffeto',
      nitCompany: '123456789',
      addressCompany: 'Carrera 19 No. 21B',
      contactCompany: '7202020',
      latitude: '1.2201109',
      longitude: '-77.2855875',
      emailCompany: 'big-app4@big.com',
      avatarCompany: 'http://www.turismotlaxcala.com/images/nivel_4/logo_caffetos.jpg',
      state: true
    },
    {
      nameBusiness: 'Pananderia Sulerna',
      nitCompany: '123456789',
      addressCompany: 'Las cuadras Cra 30',
      contactCompany: '7202020',
      latitude: '1.2112675',
      longitude: '-77.2815412',
      emailCompany: 'big-app5@big.com',
      avatarCompany: 'http://media-cdn.tripadvisor.com/media/photo-o/0e/31/7a/2f/sulerna.jpg',
      state: true
    },
    {
      nameBusiness: 'Panaderia RikiPan',
      nitCompany: '123456789',
      addressCompany: 'Calle 21 B No 30',
      contactCompany: '7202020',
      latitude: '1.2191487',
      longitude: '-77.2856081',
      emailCompany: 'big-app6@big.com',
      avatarCompany: 'http://encolombia.com/wp-content/uploads/2012/12/panaderia7-1.jpg',
      state: true
    },
    {
      nameBusiness: 'Papeleria la Cali',
      nitCompany: '123456789',
      addressCompany: 'Calle 22 No. 17 - 46',
      contactCompany: '7202020',
      latitude: '1.2191755',
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
      longitude: '-77.2921742',
      emailCompany: 'big-app8@big.com',
      avatarCompany: 'http://www.amarillastb.com/sites/default/files/logos-clientes/2639-PAPELERIA-TAURO.jpg',
      state: true
    },
    {
      nameBusiness: 'Papeleria Rodel',
      nitCompany: '123456789',
      addressCompany: 'Calle 10 #26-183, La Aurora, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2134627',
      longitude: '-77.2891104',
      emailCompany: 'big-app9@big.com',
      avatarCompany: 'http://www.amarillastb.com/sites/default/files/logos-clientes/6586-GARABATOS-PAPELERIA.jpg',
      state: true
    },
    {
      nameBusiness: 'Panaderia el Dorado',
      nitCompany: '123456789',
      addressCompany: 'Carrera 20 No. 17A',
      contactCompany: '7202020',
      latitude: '1.2184236',
      longitude: '-77.297436',
      emailCompany: 'big-app10@big.com',
      avatarCompany: 'http://papelesprimavera.com/wp-content/uploads/2017/12/distribuciones-el-dorado.png',
      state: true
    },
    {
      nameBusiness: 'Papeleria la 30',
      nitCompany: '123456789',
      addressCompany: 'Calle 30 No. 30 28',
      contactCompany: '7202020',
      latitude: '1.2184665',
      longitude: '-77.297436',
      emailCompany: 'big-app11@big.com',
      avatarCompany: 'http://container.amarillasinternet.com/pictures/200000_300000/200000_210000/207000_208000/207300_207400/207366/gallery/14600865240.jpg',
      state: true
    },
    {
      nameBusiness: 'Restaurante Mister Pollo',
      nitCompany: '123456789',
      addressCompany: 'Cra. 44b #19-56, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2341029',
      longitude: '-77.28926',
      emailCompany: 'big-app12@big.com',
      avatarCompany: 'http://pbs.twimg.com/profile_images/1503506508/LOGO_MISTER_POLLO.JPG',
      state: true
    },
    {
      nameBusiness: 'Restaurante la Merced Aurora',
      nitCompany: '123456789',
      addressCompany: 'Carrera 36 No. 12-14, La Aurora, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2148727',
      longitude: '-77.2858005',
      emailCompany: 'big-app13@big.com',
      avatarCompany: 'http://container.amarillasinternet.com/pictures/100000_200000/140000_150000/140000_141000/140500_140600/140565/gallery/166706.jpg',
      state: true
    },
    {
      nameBusiness: 'Restaurante STEAK BBQ',
      nitCompany: '123456789',
      addressCompany: 'Calle 1 #34-78 Centro Comercial Unicentro Local, La Aurora, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2161878',
      longitude: '-77.2902828',
      emailCompany: 'big-app14@big.com',
      avatarCompany: 'http://www.ccunicentropasto.com/wp-content/uploads/2016/07/logo-steak-bbq.jpg',
      state: true
    },
    {
      nameBusiness: 'Restaurante Angus',
      nitCompany: '123456789',
      addressCompany: 'Avenida Panamericana 19A-17A, Palermo, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2306753',
      longitude: '-77.2874127',
      emailCompany: 'big-app15@big.com',
      avatarCompany: 'http://www.tuordenexpress.com/wp-content/uploads/2014/09/Logo-Angus-1.jpg',
      state: true
    },
    {
      nameBusiness: 'Restaurante FIGO',
      nitCompany: '123456789',
      addressCompany: 'Calle 28 No. 30 45',
      contactCompany: '7202020',
      latitude: '1.2304893',
      longitude: '-77.2861636',
      emailCompany: 'big-app16@big.com',
      avatarCompany: 'http://paginas-amarillas.online/wp-content/uploads/2017/02/img-pr-figo-pasta-pizza-pasto-tcel-848x315.jpg',
      state: true
    },
    {
      nameBusiness: 'Big-Dog',
      nitCompany: '123456789',
      addressCompany: 'Calle No. 30B 50',
      contactCompany: '7202020',
      latitude: '1.2305375',
      longitude: '-77.3014845',
      emailCompany: 'big-app17@big.com',
      avatarCompany: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/b1/93/06/deliciosos-supernachos.jpg',
      state: true
    },
    {
      nameBusiness: 'El Corral',
      nitCompany: '123456789',
      addressCompany: 'Calle 12a No. 32a-91, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2163142',
      longitude: '-77.2906912',
      emailCompany: 'big-app18@big.com',
      avatarCompany: 'http://www.ccunicentropasto.com/wp-content/uploads/2016/07/logo-el-corral.jpg',
      state: true
    },
    {
      nameBusiness: 'ComicFood',
      nitCompany: '123456789',
      addressCompany: 'Carrera 34 No. 19-85, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2250184',
      longitude: '-77.2840501',
      emailCompany: 'big-app19@big.com',
      avatarCompany: '',
      state: true
    },
    {
      nameBusiness: 'Cheers',
      nitCompany: '123456789',
      addressCompany: 'Carrera 39 No. 20-20, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2286643',
      longitude: '-77.2850193',
      emailCompany: 'big-app20@big.com',
      avatarCompany: 'http://cheerspizzeria.com/wp-content/uploads/2015/02/logo2.png',
      state: true
    },
    {
      nameBusiness: 'SandwichTime',
      nitCompany: '123456789',
      addressCompany: 'Cra. 30 #1821, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2196451',
      longitude: '-77.2823076',
      emailCompany: 'big-app21@big.com',
      avatarCompany: 'http://s3-media1.fl.yelpcdn.com/bphoto/9i1irkiAJF2VMoGhPrnP0g/ls.jpg',
      state: true
    },
    {
      nameBusiness: 'Ferreteria Casa Andina',
      nitCompany: '123456789',
      addressCompany: 'Cl. 18 #1935, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2051955',
      longitude: '-77.2797722',
      emailCompany: 'big-app22@big.com',
      avatarCompany: 'http://casaandina.com.co/oficial/wp-content/uploads/2017/12/Casa-Andina-pasto-ferreteria-distribuidor-oficial-sika-impermeabilizacion-min.png',
      state: true
    },
    {
      nameBusiness: 'Ferreteria Buenos Aires',
      nitCompany: '123456789',
      addressCompany: 'Cl. 17 #10 -93, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2016484',
      longitude: '-77.2748027',
      emailCompany: 'big-app23@big.com',
      avatarCompany: 'http://www.ferreteriabuenosaires.com/tiendavirtual/img/mi-tienda-logo-1486741357.jpg',
      state: true
    },
    {
      nameBusiness: 'Ferreteria Andina',
      nitCompany: '123456789',
      addressCompany: 'Cl. 12 #13-06, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2016752',
      longitude: '-77.2813688',
      emailCompany: 'big-app24@big.com',
      avatarCompany: 'http://www.losandesonline.cl/img/articulo/ferreteria-andina1_(3).jpg',
      state: true
    },
    {
      nameBusiness: 'Ferreteria Chavez Leon',
      nitCompany: '123456789',
      addressCompany: 'Cl. 18 #21a-11, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.211486',
      longitude: '-77.2797578',
      emailCompany: 'big-app25@big.com',
      avatarCompany: 'http://container.amarillasinternet.com/pictures/100000_200000/190000_200000/194000_195000/194500_194600/194574/gallery/14847092502.jpg',
      state: true
    },
    {
      nameBusiness: 'J. Alberto SAS',
      nitCompany: '123456789',
      addressCompany: 'Carrerea 20 #19-75, Centro, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2103749',
      longitude: '-77.2772285',
      emailCompany: 'big-app26@big.com',
      avatarCompany: 'http://www.strategicteam.co/wp-content/uploads/2015/08/FJASAS.png',
      state: true
    },
    {
      nameBusiness: 'Supermercado Andino',
      nitCompany: '123456789',
      addressCompany: 'Calle 16B Esquina Manzana A Casa U Barrio Paraná, Narino, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2228284',
      longitude: '-77.2881127',
      emailCompany: 'big-app27@big.com',
      avatarCompany: 'http://lh3.googleusercontent.com/-0u9wZrpcDpg/Vsh8LWFPbeI/AAAAAAAAAH0/WpSgRXxcbp0/w424-h318-n/exterior3.jpg',
      state: true
    },
    {
      nameBusiness: 'Exito',
      nitCompany: '123456789',
      addressCompany: 'Calle 18 Esquina',
      contactCompany: '7202020',
      latitude: '1.2228766',
      longitude: '-77.3034336',
      emailCompany: 'big-app28@big.com',
      avatarCompany: 'http://www.eluniversal.com.co/sites/default/files/magangue_4.jpg',
      state: true
    },
    {
      nameBusiness: 'Alkosto',
      nitCompany: '123456789',
      addressCompany: 'Cra. 22 #628, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.2123218',
      longitude: '-77.277316',
      emailCompany: 'big-app29@big.com',
      avatarCompany: 'http://cdn.picodi.com/co/files/shop-description/a/alkosto/alkosto-logo.png',
      state: true
    },
    {
      nameBusiness: 'El Tigre de la Rebaja',
      nitCompany: '123456789',
      addressCompany: 'Carrera 23 #12-25, Santiago, Pasto, Nariño',
      contactCompany: '7202020',
      latitude: '1.211065',
      longitude: '-77.2852134',
      emailCompany: 'big-app30@big.com',
      avatarCompany: 'http://www.supermercadoeltigredelarebaja.com/img/0224/484.png',
      state: true
    },
    {
      nameBusiness: 'Metropolis 21',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.2038706',
      longitude: '-77.2703916',
      emailCompany: 'big-app31@big.com',
      avatarCompany: '',
      state: true
    },
    {
      nameBusiness: 'Renault',
      nitCompany: '123456789',
      addressCompany: 'Av. Panamericana',
      contactCompany: '7202020',
      latitude: '1.2038706',
      longitude: '-77.2703916',
      emailCompany: 'big-app32@big.com',
      avatarCompany: '',
      state: true
    },
    {
      nameBusiness: 'Mazda',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.2038706',
      longitude: '-77.2703916',
      emailCompany: 'big-app33@big.com',
      avatarCompany: '',
      state: true
    },
    {
      nameBusiness: 'Chevrolet',
      nitCompany: '123456789',
      addressCompany: 'Calle falsa 123',
      contactCompany: '7202020',
      latitude: '1.2038706',
      longitude: '-77.2703916',
      emailCompany: 'big-app34@big.com',
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
