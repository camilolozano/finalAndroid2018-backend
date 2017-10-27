import { AUTH_COOKIES } from '../models';

const validateCoockie = (req, res, next) => {
  const coockie = !!(req.cookies.sessionId);
  if (coockie) {
    models.AUTH_COOKIES.find({
      where: {
        ID_AUTH: req.params.id_auth
      }
    }).then((auth) => {
      if (auth) {
        if (auth.SESSION_UUID === req.cookies.sessionId) {
          next();
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = [validateCoockie];
