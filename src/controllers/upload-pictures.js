const multer = require('multer');

// lugar donde se guardan las imagenes
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/pictures');
  },
  filename: (req, file, callback) => {
    const name = file.originalname;
    const extArray = file.mimetype.split('/');
    const extension = extArray[extArray.length - 1];
    callback(null, `${name}.${extension}`);
  }
});

// Tamaño mx de la imagen
// const maxSize = 400 * 1000 * 1000;

// funcion de carga del archivo
exports.upload = multer({
  storage
  // limits: {
  //   fileSize: maxSize
  // }
  // fileFilter: (req, file, cb) => {
  //   if (!file.originalname.match(/\.(jpg)$/)) {
  //     return cb(null, false);
  //   }
  //   return cb(null, true);
  // }
});
