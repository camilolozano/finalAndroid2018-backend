const actAuth = (req, res, next) => {
  const token = req.params.token;

  if (token) {
    req.headers = {};
    req.headers.authorization = `Bearer ${token}`;
    next();
  } else {
    res.json({
      succes: false,
      msg: 'Token no encontrado',
    });
  }
};
module.exports = actAuth;
