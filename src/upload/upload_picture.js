const multer = require('multer');
import uuidv1 from 'uuid/v1';

// lugar donde se guardan las imagenes
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/pictures');
  },
  filename: (req, file, callback) => {
    let ext = file.originalname;
    ext = (ext.substring(ext.lastIndexOf('.'))).toLowerCase();

    const name = uuidv1();
    callback(null, `${name.toUpperCase()}${ext}`);
  }
});

// Tamaño mx de la imagen
const maxSize = 10 * 1000 * 1000;

// funcion de carga del archivo
exports.upload = multer({
  storage,
  limits: {
    fileSize: maxSize
  },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(null, false);
    }
    return cb(null, true);
  }
}).single('images');
