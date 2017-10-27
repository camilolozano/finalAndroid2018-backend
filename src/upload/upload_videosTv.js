const multer = require('multer');

// lugar donde se guardan las imagenes
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/videos');
  },
  filename: (req, file, callback) => {
    let name = file.originalname;
    callback(null, `${name}`);
  },
});

// Tamaño mx de la imagen
const maxSize = 500 * 1000 * 1000;

// funcion de carga del archivo
exports.upload = multer({
  storage,
  limits: {
    fileSize: maxSize,
  },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(mp4)$/)) {
      return cb(null, false);
    }
    return cb(null, true);
  },
}).single('videos');