// auth.js
import passport from 'passport';
import passportJWT from 'passport-jwt';
import { SYSTEM_USER } from './models';
import cfg from './config/config-jwt';

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = () => {
  const strategy = new Strategy(params, (payload, done) => {
    SYSTEM_USER.find({
      EMAILUSERNAME: payload.email
    }).then((user) => {
      if (user) {
        return done(null, {
          id: user.id_usuario_sistema
        });
      }
      return done(new Error('User not found'), null);
    });
  });
  passport.use(strategy);
  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', cfg.jwtSession)
  };
};
