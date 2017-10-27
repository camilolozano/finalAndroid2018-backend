require('events').EventEmitter.defaultMaxListeners = Infinity;

module.exports = (server) => {
  const io = require('socket.io')(server);
  io.on('connection', (socket) => {
    /**
     * Test
     */
  });
};
