import { auths } from '../models';

const validateCoockie = (req, res, next) => {
  const coockie = !!(req.cookies.sessionId);
  if (coockie) {
    auths.find({
      where: {
        idSystemUser: req.params.id_user
      }
    }).then((auth) => {
      if (auth) {
        if (auth.sessionUuid === req.cookies.sessionId) {
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
