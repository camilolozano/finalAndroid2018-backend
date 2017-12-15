import express from 'express';
import { upload } from '../controllers/upload-pictures';

const router = express.Router();

router.post('/', upload.array('file'), (req, res) => {
  upload.upload(req, res, (err) => {
    if (err) {
      console.log(`Error al subir el archivo ${err}`);
      return res.end(`Error al subir el archivo ${err}`);
    }
    if (req.file) {
      res.json({
        success: true
      });
    } else {
      res.json({
        success: false
      });
    }
  });
});

module.exports = router;
