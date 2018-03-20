import cron from 'node-cron';
require('events').EventEmitter.defaultMaxListeners = Infinity;
const createCorder = require('../controllers/events-socket.js/request-order');
const searchOrder = require('../controllers/events-socket.js/search-companies');

module.exports = (server) => {
  const io = require('socket.io')(server);
  console.log('Server up');
  global.io = io;
  io.on('connection', (socket) => {
    /**
     * Creación nuevo pedido
     */
    socket.on('notification-order', (order) => {
      createCorder.createOrderRequest(order).then((data) => {
        io.sockets.emit('notification-order-web', data);
      });
    });
    /**
     * Busqueda de empresas
     */
    socket.on('search-companies', (search) => {
      console.log('-----socket----', search);
      searchOrder.createSearchCompanies(search).then((data) => {
        // io.sockets.emit('search-companies', data);
      });
    });
    /**
     * Creación chat
     */
    socket.on('get-chat-on', (order) => {
      io.sockets.emit('get-chat-emit', 'Tu petición se ha registrado');
    });

    /**
      * node-cron Ejemploo (socket)
      */
    // const task = cron.schedule('*/15 * * * * *', () => {
    //   io.sockets.emit('alert', 1);
    // }, false);
    // task.start();
  });

  return io;
};
