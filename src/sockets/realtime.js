require('events').EventEmitter.defaultMaxListeners = Infinity;
const cron = require('node-cron');

module.exports = (server) => {
  const io = require('socket.io')(server);
  global.io = io;
  console.log('levantó el server de socket');
  io.on('connection', (socket) => {
    /**
     * Creación nuevo pedido
     */
    socket.on('notification-order', (order) => {
      io.sockets.emit('notification-order', order);
    });

    /**
      * node-cron Ejemploo (socket)
      */
    const task = cron.schedule('*/15 * * * * *', () => {
      io.sockets.emit('alert', 1);
    }, false);
    task.start();
  });
};
