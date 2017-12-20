import config from '../config/config-jwt';
const expressjwt = require('express-jwt');

const authToken = [
  expressjwt({ secret: config.jwtSecret }),
  (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({
        success: false,
        warning: 'Token no valido'
      });
    }
    next();
  }
];

module.exports = authToken;
