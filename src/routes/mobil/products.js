import express from 'express';
import models from '../../models/index';
import {

} from '../../models';
import jwt from '../../middlewares/jwt';

const db = models.sequelize;
const router = express.Router();

router.get('/',  async (req, res) => {
  const data = [{
    idProduct: 1,
    nameProduct: 'Pollo',
    price: '2000',
    img_uri: 'https://i.pinimg.com/474x/0a/7b/bd/0a7bbde18abb26814c797d8f9a779ea5--costa-rica-pins.jpg',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'Pollos Caicedo',
    lat: '1.216641',
    long: '-77.288535'
  }, {
    id: 2,
    nameProduct: 'Colgate',
    price: '2500',
    img_uri: 'https://tienda.antel.com.uy/razuna/assets/1/266A90D23C1C43F6AEDC9B52411F8BC9/img/52FD76A27FD14D5CB95F12A67870D49A/huawei-y5-lite-1_52FD76A27FD14D5CB95F12A67870D49A.jpg',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'El Tigre',
    lat: '1.224282 ',
    long: '-77.286053'
  }, {
    id: 3,
    nameProduct: 'Pañales',
    price: '3200',
    img_uri: 'http://www.huggies.com.mx/data/global/img/producto/cinta/cinta-pull.png',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'Andino',
    lat: '1.211371',
    long: '-77.283014'
  }, {
    id: 4,
    nameProduct: 'Azucar',
    price: '1700',
    img_uri: 'https://nutricionsinmas.com/wp-content/uploads/2014/12/azucar.jpg-580x400.jpg',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'El Tigre',
    lat: '1.216641',
    long: '-77.288535'
  }, {
    id: 5,
    nameProduct: 'Cinta',
    price: '700',
    img_uri: 'http://eskarton.com.mx/wp-content/uploads/2017/01/coverpack-cinta-canela.jpg',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'Andino',
    lat: '1.224282 ',
    long: '-77.286053'
  }, {
    id: 6,
    nameProduct: 'Cerveza',
    price: '3000',
    img_uri: 'http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/05/cerveza0.jpg',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'SupermercadoTODO',
    lat: '1.211371',
    long: '-77.283014'
  }, {
    id: 7,
    nameProduct: 'Lazaña',
    price: '6800',
    img_uri: 'https://www.lasirena.es/34753/lasana-de-carne-con-bechamel.jpg',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'Cheers',
    lat: '1.216641',
    long: '-77.288535'
  }, {
    id: 8,
    nameProduct: 'Pizza',
    price: '4500',
    img_uri: 'https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'Piazzeta',
    lat: '1.224282 ',
    long: '-77.286053'
  }, {
    id: 9,
    nameProduct: 'Hamburguesa',
    price: '8000',
    img_uri: 'http://jarris.co/wp-content/uploads/2015/11/HAMBURGUESA-DE-CARNE-jarris-e1508331595394.png',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'El Corral',
    lat: '1.211371',
    long: '-77.283014'
  }, {
    id: 10,
    nameProduct: 'HotDog',
    price: '7000',
    img_uri: 'https://tienda.antel.com.uy/razuna/assets/1/266A90D23C1C43F6AEDC9B52411F8BC9/img/52FD76A27FD14D5CB95F12A67870D49A/huawei-y5-lite-1_52FD76A27FD14D5CB95F12A67870D49A.jpg',
    stock: '',
    idCompany: '',
    idProductType: '',
    nameCompany: 'BigFood',
    lat: '1.216641',
    long: '-77.288535'
  }];

  res.json({
    success: true,
    msg: 'Correcto',
    data: data
  });
});

module.exports = router;
