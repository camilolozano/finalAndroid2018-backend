const multer = require('multer');

// lugar donde se guardan las imagenes
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/images');
  },
  filename: (req, file, callback) => {
    let name = file.originalname;
    callback(null, `${name}`);
  },
});

// Tamaño mx de la imagen
const maxSize = 4 * 1000 * 1000;

// funcion de carga del archivo
exports.upload = multer({
  storage,
  limits: {
    fileSize: maxSize,
  },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(null, false);
    }
    return cb(null, true);
  },
}).single('images');